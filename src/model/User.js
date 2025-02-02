import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
  },
  password: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    maxlength: 20,
    default: null,
  },
  status: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    default: "user",
    maxlength: 50,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
