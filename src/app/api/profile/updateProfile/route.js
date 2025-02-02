import { NextResponse } from "next/server";
import { updateUserById } from "@/services/updateUserById";
import jwt from "jsonwebtoken";

export async function PUT(req) {
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
    const body = await req.json();
    const updatedUser = await updateUserById(userId, body);

    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found or not updated" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating user profile" },
      { status: 500 }
    );
  }
}
