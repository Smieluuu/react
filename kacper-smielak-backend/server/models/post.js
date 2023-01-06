const mongoose = require("mongoose");

const postShema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("posts", postShema);

module.exports = Post;
