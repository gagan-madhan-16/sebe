const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://percyj114:percyj114@cluster0.bagyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  }
});


const User = mongoose.model("User", UserSchema);

module.exports = {
  User
};
