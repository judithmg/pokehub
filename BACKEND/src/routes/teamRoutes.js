const { Router } = require('express');
const teamController = require('../controllers/teamController');

function TeamRouter() {
  const router = Router();

  router.route('/:teamId').get(teamController.getOneTeam);
  router.route('/:teamId').put(teamController.modifyTeam);
  router.route('/:teamId').delete(teamController.deleteTeam);
  router.route('/').post(teamController.createTeam);
  router.route('/').get(teamController.getAllTeams);
  return router;
}

module.exports = TeamRouter();
