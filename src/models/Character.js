import mongoose from "mongoose";

const { Schema } = mongoose;

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
    characteristic: {
        type: String,
      },
    createdBy: {
        type: String,
      },
  },
  { timestamps: true }
);



//export default mongoose.model("User", userSchema);
//führt zu folgendem Fehler:
//error Error [OverwriteModelError]: Cannot overwrite `User` model once compiled.


module.exports =
    mongoose.models.Character || mongoose.model('Character', characterSchema);