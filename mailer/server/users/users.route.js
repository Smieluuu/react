const express = require('express');
const router = express.Router();
const postsService = require('./service/users');

router.get('/api/users', usersService.posts);

module.exports = router;
