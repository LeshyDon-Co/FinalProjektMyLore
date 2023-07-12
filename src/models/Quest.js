import mongoose from "mongoose";

const {Schema} = mongoose;

const questSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {type: String, required: true},
    text: {type: String, required: true},
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Character",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Quest || mongoose.model("Quest", questSchema);
