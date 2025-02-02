import { NextResponse } from "next/server";
import connectToDatabase from "@/services/dbConnection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const client = await connectToDatabase();
  const { email, password } = await req.json();
  // JWT_SECRET=your_jwt_secret_key

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  try {
    // Check if user exists
    const result = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user;

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      { token, user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to log in user" },
      { status: 500 }
    );
  } finally {
    // client.end();
  }
}
