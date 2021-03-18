const { Router } = require('express');
const teamController = require('../controllers/teamController');

function TeamRouter() {
  const router = Router();

  router.route('/teams/:teamId').get(teamController.getOneTeam);
  router.route('/teams/:teamId').put(teamController.modifyTeam);
  router.route('/teams/:teamId').delete(teamController.deleteTeamFromTeamDb);
  router.route('/teams/delete').patch(teamController.deleteTeamFromUser);

  router.route('/teams').post(teamController.createTeam);
  router.route('/teams').get(teamController.getAllTeams);
  return router;
}

module.exports = TeamRouter();
