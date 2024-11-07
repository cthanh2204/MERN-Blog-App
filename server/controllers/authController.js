import User from "../models/userModal.js";

export const userSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
