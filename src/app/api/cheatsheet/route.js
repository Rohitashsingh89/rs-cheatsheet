import { mongoDbConnection } from "@/services/mongoDbConnection";
import CheatSheet from "@/model/CheatSheet";

export async function GET(req) {
  try {
    await mongoDbConnection();
    const cheatsheets = await CheatSheet.find();

    return new Response(JSON.stringify(cheatsheets), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Cheat Sheets:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Cheat Sheets" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(req) {
  try {
    // Connect to MongoDB
    await mongoDbConnection();

    // Parse the request body
    const { title, content } = await req.json();

    // Check for missing required fields
    if (!title || !content) {
      return new Response(
        JSON.stringify({
          error: "Title and content are required!",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if a cheat sheet with the same title already exists
    const existingCheatSheet = await CheatSheet.findOne({ title });

    if (existingCheatSheet) {
      return new Response(
        JSON.stringify({ error: "Cheat Sheet already exists" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create and save the new Cheat Sheet
    const newCheatSheet = new CheatSheet({
      title,
      content,
      created_at: Date.now(), // Use Date.now() for current timestamp
      updated_at: Date.now(),
    });

    await newCheatSheet.save();

    return new Response(
      JSON.stringify({
        message: "Cheat Sheet added successfully",
        newCheatSheet,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error inserting CheatSheet:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to add CheatSheet",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT(req) {
  await mongoDbConnection();

  try {
    // Parse the request body
    const { id, title, content } = await req.json();

    // Validate the required fields
    if (!id || !title || !content) {
      return new Response(
        JSON.stringify({ error: "ID, title, or content are required!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Find the CheatSheet by ID and update their information
    const updatedCheatSheet = await CheatSheet.findByIdAndUpdate(
      id,
      {
        title,
        content,
        updated_at: Date.now(),
      },
      { new: true, runValidators: true }
    );

    // If no CheatSheet is found, return a 404 response
    if (!updatedCheatSheet) {
      return new Response(JSON.stringify({ error: "CheatSheet not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "CheatSheet updated successfully",
        updatedCheatSheet,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error updating CheatSheet:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to update CheatSheet",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(req) {
  await mongoDbConnection(); // Ensure the database connection is established

  try {
    // Extract the ID from the query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Validate that an ID is provided
    if (!id) {
      return new Response(
        JSON.stringify({ error: "CheatSheet ID is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Find the CheatSheet by ID and delete it
    const deletedCheatSheet = await CheatSheet.findByIdAndDelete(id);

    // If no CheatSheet is found, return a 404 response
    if (!deletedCheatSheet) {
      return new Response(JSON.stringify({ error: "CheatSheet not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "CheatSheet deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting CheatSheet:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete CheatSheet" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
