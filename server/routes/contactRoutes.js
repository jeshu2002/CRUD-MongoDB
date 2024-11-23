// routes/infoRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contactus');

router.post('/contactus', async (req, res) => {
  try {
    const { email,subject,message } = req.body;
    const newUser = new Contact({ email,subject,message });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
