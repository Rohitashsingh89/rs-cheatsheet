import connectToDatabase from "./dbConnection";

export const updatePasswordById = async (userId: any, newPassword: any) => {
  const pool = await connectToDatabase();

  try {
    const result = await pool.query(
      "UPDATE users SET password = $1 WHERE id = $2 RETURNING *",
      [newPassword, userId]
    );

    if (result.rowCount === 0) {
      throw new Error("User not found or password update failed.");
    }

    return result.rows[0];
  } catch (err) {
    throw new Error("Database update failed");
  }
};
