const Ranking = require('../models/rankingModel');

function getAllRankings(req, res) {
  const query = {};
  Ranking.find(query, (err, allRankings) => {
    if (err) {
      res.status(404);
      res.send('There was an error and petition could not be completed');
    } else {
      res.json(allRankings);
    }
  });
}

function getOneRankingByBody(req, res) {
  const { email } = req.body;

  Ranking.findOne({ email }, (error, ranking) => {
    if (error) {
      res.status(404);
      res.send(`There was an error finding by req.body ${email}`);
    } else {
      res.status(200);
      res.json(ranking);
    }
  });
}
function getOneRankingByParams(req, res) {
  const { rankingId } = req.params;

  Ranking.findById(rankingId, (error, ranking) => {
    if (error) {
      res.status(404);
      res.send(`There was an error finding by req.params ${rankingId}`);
    } else {
      res.status(200);
      res.json(ranking);
    }
  });
}
function addRankingResult(req, res) {
  const { email, battle } = req.body;
  // from battle we'll get won:1 || lost:1
  Ranking.findOneAndUpdate({ email },
    { $inc: battle },
    { new: true }, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        res.json(result);
      }
    });
}

module.exports = {
  getAllRankings,
  getOneRankingByBody,
  getOneRankingByParams,
  addRankingResult,
};
