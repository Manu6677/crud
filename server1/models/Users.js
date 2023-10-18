const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  age: { type: Number },
});

const userCreds = mongoose.model("userCreds", userSchema);

module.exports = userCreds;
