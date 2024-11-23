// routes/infoRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/addUser', async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const newUser = new User({ firstName, lastName });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
