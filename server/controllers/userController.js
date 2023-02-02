import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    // why cant we see this?!?
    console.log("hello from register Controller", req.body);

    const user = await User.create(req.body);
    console.log("register user", user);

    res.send({ success: true });
  } catch (error) {
    console.log("Register error", error.message);

    res.send({ success: false, error: error.message });
  }
};
