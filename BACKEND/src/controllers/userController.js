const User = require('../models/userModel');

function createUser(req, res) {
  const newUser = new User(req.body);
  newUser.save();
  res.json(newUser);
}

function getAllUsers(req, res) {
  const query = {};
  User.find(query, (err, allUsers) => {
    if (err) {
      res.status(404);
      res.send('There was an error and petition could not be completed');
    } else {
      res.json(allUsers);
    }
  });
}

async function getOneUser(req, res) {
  const { email } = req.body;

  await User.findOne({ email }, (error, user) => {
    if (error) {
      res.status(404);
      res.send(`There was an error finding by req.body ${user}`);
    } else {
      res.status(200);
      res.json(user);
    }
  });
}

async function deleteUser(req, res) {
  await User.findOneAndRemove(req.body, (error, deleted) => {
    if (error) {
      res.status(404);
    } else {
      res.json(deleted);
    }
  });
}

async function modifyUser(req, res) {
  const email = req.params?.userId || req.body.email;

  await User.findOneAndUpdate({ email }, req.body, { new: true }, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.json(result);
    }
  });
}

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  modifyUser,
};
