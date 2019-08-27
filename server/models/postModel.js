const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postModel = new Schema({
    path: String,
    title: String,
    desc: String,
    author: String,
    postDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model("Post", postModel);