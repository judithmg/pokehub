const { Router } = require('express');
const teamController = require('../controllers/teamController');
const userController = require('../controllers/userController');

function TeamRouter() {
  const router = Router();

  router.route('/add').put(userController.addTeamToUser);
  router.route('/:teamId').get(teamController.getOneTeam);
  router.route('/teams/:teamId').put(teamController.modifyTeam);
  router.route('/teams/:teamId').delete(teamController.deleteTeamFromTeamDb);
  router.route('/delete/:teamId').patch(teamController.deleteTeamByParams);
  router.route('/delete').patch(teamController.deleteTeamFromUser);

  router.route('/modify-poke/:userId').put(teamController.updateTeamById);

  router.route('/teams').post(teamController.createTeam);
  router.route('/').get(teamController.getAllTeams);
  return router;
}

module.exports = TeamRouter();
