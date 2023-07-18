import mongoose from "mongoose";

const {Schema} = mongoose;

const itemSchema = new Schema(
    {
        itemid: {
            type: String,
        },
        itemname: {
            type: String,
        },
        itemtype: {
            type: String,
        },
        itemprice: {
            type: Number,
        },
        itemtext: {
            type: String,
        },
        itempicture: {
            type: String,
        },
        characters: [{
            type: Schema.Types.ObjectId,
            ref: "Character",
        }]
    },
);

module.exports =
 mongoose.models.Item || mongoose.model("Item", itemSchema);