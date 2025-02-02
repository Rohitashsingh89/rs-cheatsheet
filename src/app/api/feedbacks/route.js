import connectToDatabase from "@/services/dbConnection";

export async function GET(req) {
  const client = await connectToDatabase();

  try {
    const res = await client.query("SELECT * FROM template_feedback");
    const Feedbacks = res.rows;

    return new Response(JSON.stringify(Feedbacks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Feedbacks:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Feedbacks" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
