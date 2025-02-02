import mongoose from "mongoose";

const ResumeTemplateSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  description: {
    type: String,
    default: null,
  },
  layout: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  example_content: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  version: {
    type: Number,
    default: 1,
  },
  is_premium: {
    type: Boolean,
    default: false,
  },
  popularity_score: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    default: "",
  },
  status: {
    type: Boolean,
    default: true,
  },
  author_name: {
    type: String,
    default: "",
  },
  number_of_downloads: {
    type: Number,
    default: 0,
  },
  average_rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  is_expired: {
    type: Boolean,
    default: false,
  },
  thumbnail_url: {
    type: String,
    default: "",
  },
  preview_url: {
    type: String,
    default: "",
  },
});

export default mongoose.models.ResumeTemplate ||
  mongoose.model("ResumeTemplate", ResumeTemplateSchema);
