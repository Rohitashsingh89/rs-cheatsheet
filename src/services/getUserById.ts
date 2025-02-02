import connectToDatabase from "./dbConnection";

export const getUserById = async (userId: any) => {
  const pool = await connectToDatabase();

  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);

    if (result.rows.length === 0) {
      return null;
    }

    const user = result.rows[0];

    return user;
  } catch (err) {
    throw new Error("Database query failed");
  }
};
