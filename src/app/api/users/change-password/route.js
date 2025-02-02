// import connectToDatabase from "@/services/dbConnection";
// import bcrypt from "bcrypt";

// export async function POST(req) {
//   const client = await connectToDatabase();

//   try {
//     // Parse the request body
//     const { id, oldPassword, newPassword } = await req.json();

//     // Validate input
//     if (!id || !oldPassword || !newPassword) {
//       return new Response(
//         JSON.stringify({
//           error: "ID, old password, and new password are required!",
//         }),
//         {
//           status: 400,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//     }

//     // Fetch user by ID
//     const userQuery = `SELECT * FROM users WHERE id = $1`;
//     const userResult = await client.query(userQuery, [id]);
//     const user = userResult.rows[0];

//     if (!user) {
//       return new Response(JSON.stringify({ error: "User not found" }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Compare the old password
//     const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

//     if (!isPasswordCorrect) {
//       return new Response(JSON.stringify({ error: "Incorrect old password" }), {
//         status: 401,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Hash the new password
//     const saltRounds = 10;
//     const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

//     // Update the password in the database
//     const updateQuery = `
//       UPDATE users
//       SET password = $1, updated_at = NOW()
//       WHERE id = $2
//       RETURNING id, username, email, mobile_number, role, status, created_at, updated_at;
//     `;
//     const updateResult = await client.query(updateQuery, [
//       hashedNewPassword,
//       id,
//     ]);
//     const updatedUser = updateResult.rows[0];

//     return new Response(
//       JSON.stringify({
//         message: "Password updated successfully",
//         updatedUser,
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error updating password:", error);
//     return new Response(
//       JSON.stringify({
//         error: "Failed to update password",
//         details: error.message,
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

import { mongoDbConnection } from "@/services/mongoDbConnection";
import User from "@/model/User.js";
import bcrypt from "bcrypt";

export async function POST(req) {
  await mongoDbConnection();

  try {
    // Parse the request body
    const { id, oldPassword, newPassword } = await req.json();

    // Validate input
    if (!id || !oldPassword || !newPassword) {
      return new Response(
        JSON.stringify({
          error: "ID, old password, and new password are required!",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Fetch user by ID
    const user = await User.findOne({ _id: id });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Compare the old password
    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ error: "Incorrect old password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hash the new password
    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the password in the database
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          password: hashedNewPassword,
          updated_at: new Date(),
        },
      },
      { returnDocument: "after" } // Return the updated document
    );

    return new Response(
      JSON.stringify({
        message: "Password updated successfully",
        updatedUser: updatedUser.value,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating password:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to update password",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
