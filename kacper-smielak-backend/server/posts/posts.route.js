const express = require("express");
const router = express.Router();
const postsService = require("./service");

router.get("/api/posts", postsService.GET_posts);
router.post("/api/posts", postsService.POST_addPost);

module.exports = router;
