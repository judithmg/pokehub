const Team = require('../models/teamModel');
const User = require('../models/userModel');

function createTeam(req, res) {
  const newTeam = new Team(req.body);
  newTeam.save();
  res.json(newTeam);
}

function getAllTeams(req, res) {
  const query = {};
  Team.find(query, (err, allTeams) => {
    if (err) {
      res.status(404);
      res.send('There was an error and petition could not be completed');
    } else {
      res.json(allTeams);
    }
  });
}

async function getOneTeam(req, res) {
  const { email } = req.body;

  await Team.findOne({ email }, (error, team) => {
    if (error) {
      res.status(404);
      res.send(`There was an error finding by req.body ${team}`);
    } else {
      res.status(200);
      res.json(team);
    }
  });
}

function deleteTeamFromUser(req, res) {
  console.log(req.body);
  console.log('hello');
  const { email, team } = req.body;
  User.findOneAndUpdate({ email }, { $pull: { teams: team } },
    { new: true }, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json(result);
      }
    });
}

async function deleteTeamFromTeamDb(req, res) {
  await Team.findOneAndRemove(req.body, (error, deleted) => {
    if (error) {
      res.status(404);
    } else {
      res.json(deleted);
    }
  });
}

async function modifyTeam(req, res) {
  const email = req.params?.teamId || req.body.email;

  await Team.findOneAndUpdate({ email }, req.body, { new: true }, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.json(result);
    }
  });
}

module.exports = {
  createTeam,
  getAllTeams,
  getOneTeam,
  deleteTeamFromTeamDb,
  deleteTeamFromUser,
  modifyTeam,
};
