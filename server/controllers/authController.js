import User from "../models/userModel.js";

export const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExist = await User.findOne({ $or: [{ username }, { email }] });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const userSignIn = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
