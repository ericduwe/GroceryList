const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    crossedOut: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("item", itemSchema)