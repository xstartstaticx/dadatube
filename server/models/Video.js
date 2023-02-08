import mongoose from "mongoose";

const { Schema } = mongoose;

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      // required: true,
    },
    videoEmbed: {
      type: String,
      //   required: true,
    },
    runtime: {
      type: Number,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Video", videoSchema);
