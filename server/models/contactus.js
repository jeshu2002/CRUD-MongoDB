// model/user.js
const mongoose = require('mongoose');

const contactus = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const contacts = mongoose.model('userinfo', contactus);

module.exports = contacts;
