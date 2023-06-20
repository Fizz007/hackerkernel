const User = require("../model/userModel");

const loginUser = (req, res) => {
  const { name, email, mobile } = req.body;

  const newUser = new User({
    name,
    email,
    mobile,
  });

  newUser
    .save()
    .then(() => res.status(200).json({ message: "User added" }))
    .catch((error) => res.status(500).json({ error }));
};

const getAllUser = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = {loginUser,getAllUser};
