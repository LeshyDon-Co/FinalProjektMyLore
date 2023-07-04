import mongoose from "mongoose";

const {Schema} = mongoose;

const storySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  story: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.models.Story || mongoose.model("Story", storySchema);
