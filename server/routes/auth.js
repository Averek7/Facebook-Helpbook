const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("../model/User")
require("dotenv").config();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, rememberMe } = req.body;
    
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    
    const processSalt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, processSalt);
    console.log(hashedPassword)

    user = await User.create({
        name,
        email,
        password: hashedPassword,
        rememberMe
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res
        .status(400)
        .json({ success, errors: "Please enter correct credentials." });
    }
    const payLoad = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(payLoad, JWT_SECRET);
    res.json({ authToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
