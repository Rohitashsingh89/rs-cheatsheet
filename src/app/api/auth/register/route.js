import { NextResponse } from "next/server";
import connectToDatabase from "@/services/dbConnection";
import bcrypt from "bcrypt";

export async function POST(req) {
  const client = await connectToDatabase();
  const { username, email, password, mobile_number, role } = await req.json();

  const userRole = role || "User";

  if (!username || !email || !password || !mobile_number) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    const checkUser = await client.query(
      "SELECT * FROM users WHERE email = $1 OR username = $2",
      [email, username]
    );

    if (checkUser.rows.length > 0) {
      return NextResponse.json(
        { error: "Username or email is already registered" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const result = await client.query(
      `INSERT INTO users (username, email, password, mobile_number, role, status)
       VALUES ($1, $2, $3, $4, $5, true) RETURNING *`,
      [username, email, hashedPassword, mobile_number, userRole]
    );

    const newUser = result.rows[0];

    // Optionally, generate a token here if needed
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
