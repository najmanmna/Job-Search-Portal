const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
// Import and use the User schema
const User = require("./User");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Registration route
app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Create a new user document
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    // Save the user document to the database
    await newUser.save();

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login route
app.post("/Signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Received login request for email:", email);
    const user = await User.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password); // Compare hashed password

      if (passwordMatch) {
        const role = user.role;
        console.log("Login successful for email:", email);
        res.status(200).json({ message: "Success", role: role });
      } else {
        console.log("Incorrect password for email:", email);
        res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      console.log("User not found for email:", email);
      res.status(401).json({ message: "User doesn't exist" });
    }
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ error: "Sign-in failed" });
  }
});

const mongoose = require("mongoose");

// Replace 'mongodb://localhost:27017/your-database-name' with your actual MongoDB URL
const mongoURI =
  "mongodb+srv://najmanmna:Corona%40170@cluster0.fntmzgv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
