import mongoose from "mongoose";

const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    charname: {
      type: String,
      unique: true,
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
    attributeone: {
        type: Number,
      },
      attributetwo: {
        type: Number,
      },
      attributethree: {
        type: Number,
      },
  },
  { timestamps: true }
);



//export default mongoose.model("User", userSchema);
//führt zu folgendem Fehler:
//error Error [OverwriteModelError]: Cannot overwrite `User` model once compiled.


module.exports =
    mongoose.models.Character || mongoose.model('Character', characterSchema);