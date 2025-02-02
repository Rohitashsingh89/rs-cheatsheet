import mongoose from "mongoose";

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://timrohitash:rohitashresumebuilder@cluster0.grfddzz.mongodb.net/ResumeBuilder?retryWrites=true&w=majority&appName=Cluster0";

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

export const mongoDbConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};
