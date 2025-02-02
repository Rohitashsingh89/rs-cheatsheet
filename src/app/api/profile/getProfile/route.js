import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getUserById } from "@/services/getUserById";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { message: "Authorization token missing" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await getUserById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const { password, ...userWithoutPassword } = user;

    return NextResponse.json({ message: userWithoutPassword }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching user profile ${error}` },
      { status: 500 }
    );
  }
}
