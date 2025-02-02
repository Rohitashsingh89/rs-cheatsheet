import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Invalidate token or session (if applicable)
    // Here, we're simply returning a successful response to simulate logout.

    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to log out" }, { status: 500 });
  }
}
