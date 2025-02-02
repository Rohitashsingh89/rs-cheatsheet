import Otp from "@/model/Otp.js";

export async function POST(req) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Email and OTP are required!",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Find the OTP entry in the database
    const otpEntry = await Otp.findOne({ email, otp });

    if (!otpEntry) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid or expired OTP!",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if OTP has expired
    if (Date.now() > otpEntry.expiry) {
      await Otp.deleteOne({ _id: otpEntry._id });
      return new Response(
        JSON.stringify({
          success: false,
          message: "OTP has expired!",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // OTP is valid, delete it and return success
    await Otp.deleteOne({ _id: otpEntry._id });
    return new Response(
      JSON.stringify({
        success: true,
        message: "OTP verified successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle server errors
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to verify OTP!",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
