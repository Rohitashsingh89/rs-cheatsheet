import connectToDatabase from "./dbConnection";

export const updateUserById = async (userId: any, userData: any) => {
  const pool = await connectToDatabase();

  const { username, email, mobile_number, role } = userData;

  try {
    const result = await pool.query(
      "UPDATE users SET username = $1, email = $2, mobile_number = $3, role = $4 WHERE id = $5 RETURNING *",
      [username, email, mobile_number, role, userId]
    );

    if (result.rows.length === 0) {
      return null;
    }

    const { password, ...updatedUser } = result.rows[0];

    return updatedUser;
  } catch (err) {
    throw new Error("Database update failed");
  }
};
