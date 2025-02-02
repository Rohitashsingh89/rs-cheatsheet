import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const connectToDatabase = async () => {
  try {
    console.log("Database connection pool ready.");
    return pool;
  } catch (err: any) {
    console.error("Failed to connect to the database:", err.stack);
    throw new Error("Database connection failed");
  }
};

export default connectToDatabase;

// import { Pool } from "pg";

// const client = new Pool({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "admin@12345678",
//   database: "tutorial_stack",
// });

// const connectToDatabase = async () => {
//   try {
//     await client.connect();
//     console.log("Connected to the database successfully.");
//     return client;
//   } catch (err: any) {
//     console.error("Failed to connect to the database:", err.stack);
//     return "failure";
//   }
// };

// export default connectToDatabase;
