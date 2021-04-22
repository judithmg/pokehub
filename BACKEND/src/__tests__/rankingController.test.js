const {
  getAllRankings,
  getOneRankingByBody,
  getOneRankingByParams,
  addRankingResult,
} = require('../controllers/rankingController');

const Ranking = require('../models/rankingModel');

jest.mock('../models/rankingModel');

describe('Given a rankingController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        email: 'asdfg@gmail.com',
      },
      params: { RankingId: 4 },
    };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn(),
    };
  });

  describe('When getAllRankings is called', () => {
    test('Then res.json should be called if all Rankings are found', () => {
      Ranking.find.mockImplementationOnce((query, callback) => callback(false));

      getAllRankings(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if  Rankings are not found', () => {
      Ranking.find.mockImplementationOnce((query, callback) => callback(true));

      getAllRankings(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When addRankingResult is called', () => {
    test('Then res.json should be called if all Rankings are found', () => {
      Ranking.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(false));

      addRankingResult(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.send should be called if  Rankings are not found', () => {
      Ranking.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(true));

      addRankingResult(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When getOneRankingByBody is called', () => {
    test('Then res.json should be called if the Ranking is found', async () => {
      Ranking.findOne.mockImplementationOnce((email, callback) => callback(false));

      await getOneRankingByBody(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if the Ranking is not found', async () => {
      Ranking.findOne.mockImplementationOnce((email, callback) => callback(true));

      await getOneRankingByBody(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When getOneRankingByParams is called', () => {
    test('Then res.json should be called if the Ranking is found', async () => {
      Ranking.findById.mockImplementationOnce((email, callback) => callback(false));

      await getOneRankingByParams(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if the Ranking is not found', async () => {
      Ranking.findById.mockImplementationOnce((email, callback) => callback(true));

      await getOneRankingByParams(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
});
