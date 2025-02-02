// import connectToDatabase from "@/services/dbConnection";
import { mongoDbConnection } from "@/services/mongoDbConnection";
import User from "@/model/User.js";
import bcrypt from "bcrypt";

export async function GET(req) {
  try {
    await mongoDbConnection();
    const users = await User.find();
    const formattedUsers = users.map((user) => ({
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      mobile_number: user.mobile_number,
      role: user.role,
      status: user.status,
      created_at: user.created_at,
      updated_at: user.updated_at,
    }));
    return new Response(JSON.stringify(formattedUsers), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Users:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch Users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    // Connect to MongoDB
    await mongoDbConnection();

    // Parse the request body
    const {
      username,
      email,
      password,
      mobile_number,
      role = "User",
      status = true,
    } = await req.json();

    // Check for missing required fields
    if (!username || !email || !password) {
      return new Response(
        JSON.stringify({
          error: "Username, email, and password are required!",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if the email or username already exists
    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      if (existingUser.email === email && existingUser.username === username) {
        return new Response(
          JSON.stringify({ error: "Email and Username already exist" }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" },
          }
        );
      } else if (existingUser.email === email) {
        return new Response(JSON.stringify({ error: "Email already exists" }), {
          status: 409,
          headers: { "Content-Type": "application/json" },
        });
      } else if (existingUser.username === username) {
        return new Response(
          JSON.stringify({ error: "Username already exists" }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      mobile_number,
      role,
      status,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await newUser.save();

    return new Response(
      JSON.stringify({
        message: "User added successfully",
        newUser: {
          username: newUser.username,
          email: newUser.email,
          mobile_number: newUser.mobile_number,
          role: newUser.role,
          status: newUser.status,
          created_at: newUser.created_at,
          updated_at: newUser.updated_at,
        },
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error inserting User:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add user", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// export async function POST(req) {
//   const client = await connectToDatabase();
//   const {
//     username,
//     email,
//     password,
//     mobile_number,
//     role = "User",
//     status = true,
//   } = await req.json();

//   if (!username || !email || !password) {
//     return new Response(
//       JSON.stringify({ error: "Username, email or password is required!" }),
//       {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }

//   try {
//     const emailCheckQuery = "SELECT id FROM users WHERE email = $1";
//     const emailCheck = await client.query(emailCheckQuery, [email]);

//     if (emailCheck.rowCount > 0) {
//       return new Response(JSON.stringify({ error: "Email already exists" }), {
//         status: 409,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const query = `
//       INSERT INTO users (username, email, password, mobile_number, role, status, created_at, updated_at)
//       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
//       RETURNING id, username, email, mobile_number, role, status, created_at, updated_at;
//     `;
//     const values = [
//       username,
//       email,
//       hashedPassword,
//       mobile_number,
//       role,
//       status,
//     ];

//     const res = await client.query(query, values);
//     const newUser = res.rows[0];

//     return new Response(
//       JSON.stringify({
//         message: "User added successfully",
//         newUser: newUser,
//       }),
//       {
//         status: 201,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error inserting User:", error);
//     return new Response(JSON.stringify({ error: "Failed to Add User" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// export async function PUT(req) {
//   const client = await connectToDatabase();
//   const { id, username, email, mobile_number, role, status } = await req.json();
//   if (!username || !email) {
//     return new Response(
//       JSON.stringify({ error: "Email or Username is required!" }),
//       {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }

//   try {
//     const query = `
//       UPDATE users
//       SET username = $1, email = $2, mobile_number = $3, role = $4, status = $5, updated_at = NOW()
//       WHERE id = $6
//       RETURNING *;
//     `;
//     const values = [username, email, mobile_number, role, status, id];

//     const res = await client.query(query, values);
//     const updatedUser = res.rows[0];

//     if (res.rowCount === 0) {
//       return new Response(JSON.stringify({ error: "User not found" }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     const { password, ...userWithoutPassword } = updatedUser;

//     return new Response(
//       JSON.stringify({
//         message: "User updated successfully",
//         updatedUser: userWithoutPassword,
//       }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return new Response(JSON.stringify({ error: "Failed to update User" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

export async function PUT(req) {
  await mongoDbConnection(); // Ensure the database connection is established

  try {
    // Parse the request body
    const { id, username, email, mobile_number, role, status } =
      await req.json();

    // Validate the required fields
    if (!id || !username || !email) {
      return new Response(
        JSON.stringify({ error: "ID, Username, and Email are required!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Find the user by ID and update their information
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        email,
        mobile_number,
        role,
        status,
        updated_at: Date.now(), // Update the timestamp
      },
      { new: true, runValidators: true } // Return the updated document and validate
    );

    // If no user is found, return a 404 response
    if (!updatedUser) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Exclude sensitive fields (like password) from the response
    const { password, ...userWithoutPassword } = updatedUser.toObject();

    return new Response(
      JSON.stringify({
        message: "User updated successfully",
        updatedUser: userWithoutPassword,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to update User",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// export async function DELETE(req) {
//   const client = await connectToDatabase();
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   if (!id) {
//     return new Response(JSON.stringify({ error: "User ID is required" }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
//   try {
//     const result = await client.query(
//       "DELETE FROM users WHERE id = $1 RETURNING *",
//       [id]
//     );

//     if (result.rowCount === 0) {
//       return new Response(JSON.stringify({ error: "User not found" }), {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     return new Response(
//       JSON.stringify({ message: "User deleted successfully" }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     console.error("Error deleting User:", error);
//     return new Response(JSON.stringify({ error: "Failed to delete User" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

export async function DELETE(req) {
  await mongoDbConnection(); // Ensure the database connection is established

  try {
    // Extract the ID from the query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Validate that an ID is provided
    if (!id) {
      return new Response(JSON.stringify({ error: "User ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Find the user by ID and delete it
    const deletedUser = await User.findByIdAndDelete(id);

    // If no user is found, return a 404 response
    if (!deletedUser) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting User:", error);
    return new Response(JSON.stringify({ error: "Failed to delete User" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
