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

function getOneTeam(req, res) {
  const { email } = req.body;

  Team.findOne({ email }, (error, team) => {
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

function updateTeamById(req, res) {
  const { userId } = req.params;
  const updatedTeam = req.body;
  User.findByIdAndUpdate(userId, updatedTeam,
    { new: true, upsert: true }, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json(result);
      }
    });
}

function deleteTeamFromTeamDb(req, res) {
  Team.findOneAndRemove(req.body, (error, deleted) => {
    if (error) {
      res.send(`there was an error ${error}`);
    } else {
      res.json(deleted);
    }
  });
}

function deleteTeamByParams(req, res) {
  const { teamId } = req.params;
  const { userId } = req.body;

  User.updateOne({ _id: userId }, { $pull: { teams: { _id: teamId } } },
    { new: true }, (error, result) => {
      if (error) {
        res.send(`there was an error ${error}`);
      } else {
        res.json(result);
      }
    });
}

function modifyTeam(req, res) {
  const { email } = req.body;

  Team.findOneAndUpdate({ email }, req.body, { new: true }, (error, result) => {
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
  deleteTeamByParams,
  updateTeamById,
};
