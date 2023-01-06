const Post = require("../../models/post");

const GET_posts = async (req, res) => {
  const resposne = {
    success: true,
    posts: await Post.find().limit(20).sort({ date: -1 }),
  };

  return res.status(200).json(resposne);
};

const POST_addPost = async (req, res) => {
  const { category, text, important } = req.body;

  const newPost = new Post({
    category,
    text,
    important,
  });

  const response = {
    success: true,
    post: await newPost.save(),
  };

  return res.status(200).json(response);
};
module.exports = {
  POST_addPost,
  GET_posts,
};
