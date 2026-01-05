const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://madhavabobbili:Mr7Tu4TPWWdjYfMc@cluster0.qfs7q.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("educarelogin", UserSchema);

// Register Route
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const existingUser  = await User.findOne({ email });
  if (existingUser ) {
    return res.status(400).json({ error: "Email already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser  = new User({ username, email, password: hashedPassword });
  await newUser .save();

  res.status(201).json({ message: "Registration successful!" });
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Invalid email or password." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid email or password." });
  }

  const token = jwt.sign({ id: user._id }, 'educare@123', { expiresIn: "1h" });
  res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));