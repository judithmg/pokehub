const { Router } = require('express');
const rankingController = require('../controllers/rankingController');

function RankingRouter() {
  const router = Router();

  router.route('/add').put(rankingController.addRankingResult);
  router.route('/:rankingId').get(rankingController.getOneRankingByParams);
  router.route('/').post(rankingController.getOneRankingByBody);
  router.route('/').get(rankingController.getAllRankings);
  return router;
}

module.exports = RankingRouter();
