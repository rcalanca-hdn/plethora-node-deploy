const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

router.post("/", async (req, res) => {
  const user = new User({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    ProfileId: req.body.ProfileId
  });

  try {
    const newUser = await user.save();
    var token = jwt.sign({ user: user }, process.env.SECRET, {
      //expiresIn: 86400 // expires in 24 hours
      expiresIn: 8640000
    });

    res.status(200).send({ user: newUser, token: token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  var username = req.body.Username;
  var password = req.body.Password;

  try {
    await User.findOne({ Username: username, Password: password }, function(
      err,
      user
    ) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (user == null) {
        return res.status(404).json({ message: "Cant find user" });
      } else {
        var token = jwt.sign({ user: user }, process.env.SECRET, {
          //expiresIn: 86400 // expires in 24 hours
          expiresIn: 8640000
        });
        res.status(200).send({ user: user, token: token });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.put("/:id", getUser, async (req, res) => {
  try {
    let userUpdated = req.body;

    User.updateOne({ _id: req.params.id }, userUpdated, function(
      err,
      userUpdated
    ) {
      if (err) {
        res.status(400).json({ message: err.message });
      }
      res.status(200).send();
    });
  } catch {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted This user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cant find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = router;
