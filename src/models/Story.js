import mongoose from "mongoose";

const {Schema} = mongoose;

const storySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Story || mongoose.model("Story", storySchema);
