const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const userSignUp = async (req, res) => {
  try {
    const { name, usertype, userid, password } = req.body;

    if (!userid || !password || !name || !usertype) {
      return res.status(400).json({ Error: "fields must be filled" });
    }

    let user = await User.findOne({ userid });
    if (user) {
      return res.status(400).json({ Error: "User are already exists" });
    }

    const hashpass = await bcrypt.hash(password, 10);
    const newuser = await User.create({
      name,
      usertype,
      userid,
      password: hashpass,
    });

    let token = jwt.sign({ userid, id: newuser._id }, process.env.SECRET_KEY, {
      expiresIn: "1hr",
    });

    return res.status(201).json({
      message: "User created successfully",
      token: token,
      newUser: newuser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ Error: "Internal Server Error", message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { userid, password } = req.body;
    if (!userid || !password) {
      return res.status(400).json({ Error: "fields must be filled" });
    }
    let user = await User.findOne({ userid });
    if (user && (await bcrypt.compare(password, user.password))) {
      let token = jwt.sign({ userid, id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "10s",
      });
      return res
        .status(200)
        .json({ message: "User logged in successfully", token: token, user });
    } else {
      return res.status(400).json({ Error: "Invalid credentials" });
    }
  } catch (err) {
    return res.status(500).json({ Error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ userid: req.params.userid });
    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ Error: err.message });
  }
};

module.exports = { userSignUp, userLogin, getUser };
