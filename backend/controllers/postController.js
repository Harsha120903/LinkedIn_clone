const Post = require('../models/postModel');

const createPost = async (req, res) => {
  const { text } = req.body;
  try {
    if (!text) return res.status(400).json({ message: 'Post text required' });
    const post = await Post.create({ user: req.user._id, text });
    await post.populate('user', 'name');
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createPost, getAllPosts };
