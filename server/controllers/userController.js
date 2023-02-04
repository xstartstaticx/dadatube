import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;

export const register = async (req, res) => {
  try {
    console.log("hello from register Controller", req.body);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);

    const hashedPass = await bcrypt.hash(req.body.password, salt);
    console.log("hashed pass is:", hashedPass);

    req.body.password = hashedPass;

    const user = await User.create(req.body);
    console.log("register user", user);

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    // call email function

    res.send({ success: true });
  } catch (error) {
    console.log("Register error", error.message);

    res.send({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    console.log("hello from login controller:", req.body);

    const user = await User.findOne({
      $or: [
        { username: req.body.emailOrUsername },
        { email: req.body.emailOrUsername },
      ],
    }).select("-__v");

    console.log("login controller user:", user);

    res.send({ success: true, user: user });
  } catch (error) {
    console.log("Login error", error.message);

    res.send({ success: false, error: error.message });
  }
};
