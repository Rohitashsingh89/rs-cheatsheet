import nodemailer from "nodemailer";
import Otp from "@/model/Otp.js";
const crypto = require("crypto");

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Email is required!",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Generate OTP
  const otp = crypto.randomInt(100000, 999999).toString();

  // Set OTP expiration time (e.g., 10 minutes from now)
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  try {
    // Store the OTP and expiry in the database
    const otpEntry = await Otp.create({ email, otp, expiresAt });

    // Check if the entry is successfully created
    if (!otpEntry) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to store OTP in the database!",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Setup transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Ensure this is your email user
        pass: process.env.EMAIL_PASS, // Ensure this is your Gmail app password
      },
    });

    // Setup mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    };

    // Send OTP email
    await transporter.sendMail(mailOptions);

    // Respond with success if email is sent
    return new Response(
      JSON.stringify({
        success: true,
        message: "OTP sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Catch any error during the OTP creation or sending email process
    console.error("Error occurred while sending OTP:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send OTP!",
        error: error.message, // Return the error message for debugging
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
