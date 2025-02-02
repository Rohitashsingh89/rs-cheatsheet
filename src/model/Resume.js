import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
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
      ref: "Template",
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    no_of_downloads: {
      type: Number,
      default: 3,
    },
    lastDownloadedAt: {
      type: Date,
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Transactions ||
  mongoose.model("Transactions", TransactionSchema);
