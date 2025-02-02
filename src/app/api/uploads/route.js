import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import { promises as fs } from "fs";
import path from "path";

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const uploadPath = path.join(process.cwd(), "public/uploads");
      await fs.mkdir(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

// Create a promise-based middleware for handling uploads
const uploadMiddleware = upload.single("file");
const multerMiddleware = (req) =>
  new Promise((resolve, reject) => {
    uploadMiddleware(req, {}, (err) => {
      if (err) return reject(err);
      resolve(null);
    });
  });

// Handle POST requests
export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const uploadsDir = path.join(process.cwd(), "public/uploads");
  const filename = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadsDir, filename);

  try {
    await fs.mkdir(uploadsDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    const fileUrl = `/uploads/${filename}`;
    return NextResponse.json({ url: fileUrl });
  } catch (err) {
    return NextResponse.json(
      { error: `File upload failed: ${err.message}` },
      { status: 500 }
    );
  }
}

// export const config = {
//   api: {
//     bodyParser: false, // Disable default bodyParser for file handling
//   },
// };
