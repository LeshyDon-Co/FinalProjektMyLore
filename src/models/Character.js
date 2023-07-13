import mongoose from "mongoose";
import itemSchema from "./Item.js";

const {Schema} = mongoose;

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nation: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    health: {
      type: Number,
    },
    attack: {
      type: Number,
    },
    defense: {
      type: Number,
    },
    stadium: {
      type: String,
    },
    characteristic: {
      type: String,
    },
    isSelected: {
      type: Boolean,
    },
    picture: {
      type: String,
    },
    quests: [
      {
        type: Schema.Types.ObjectId,
        ref: "Quest",
      },
    ],
    location: {
      type: String,
    },
    createdBy: {
      type: String,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  {timestamps: true}
);

//export default mongoose.model("User", userSchema);
//führt zu folgendem Fehler:
//error Error [OverwriteModelError]: Cannot overwrite `User` model once compiled.

module.exports =
  mongoose.models.Character || mongoose.model("Character", characterSchema);
