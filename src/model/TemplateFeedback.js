import mongoose from "mongoose";

const TemplateFeedbackSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    required: true,
    unique: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  template_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ResumeTemplate",
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
    default: null,
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

export default mongoose.models.TemplateFeedback ||
  mongoose.model("TemplateFeedback", TemplateFeedbackSchema);
