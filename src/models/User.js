import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);



//export default mongoose.model("User", userSchema);
//führt zu folgendem Fehler:
//error Error [OverwriteModelError]: Cannot overwrite `User` model once compiled.


module.exports =
    mongoose.models.User || mongoose.model('User', userSchema);