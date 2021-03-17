const {
  createTeam,
  getAllTeams,
  getOneTeam,
  deleteTeam,
  modifyTeam,
} = require('../controllers/teamController');

const Team = require('../models/teamModel');

jest.mock('../models/teamModel');

describe('Given a teamController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        team: [],
      },
    };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn(),

    };
  });
  describe('When createTeam is called', () => {
    test('Then res.json should be called if the Team is created', () => {
      createTeam(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When getAllTeams is called', () => {
    test('Then res.json should be called if all Teams are found', () => {
      Team.find.mockImplementationOnce((query, callback) => callback(false));

      getAllTeams(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if  Teams are not found', () => {
      Team.find.mockImplementationOnce((query, callback) => callback(true));

      getAllTeams(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When getOneTeam is called', () => {
    test('Then res.json should be called if the Team is found', async () => {
      Team.findOne.mockImplementationOnce((email, callback) => callback(false));

      await getOneTeam(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if the Team is not found', async () => {
      Team.findOne.mockImplementationOnce((email, callback) => callback(true));

      await getOneTeam(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When deleteTeam is called', () => {
    test('Then res.json should be called if deletion is successful', async () => {
      Team.findOneAndRemove.mockImplementationOnce((team, callback) => callback(false));
      await deleteTeam(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.json should be called if deletion can not be completed', async () => {
      Team.findOneAndRemove.mockImplementationOnce((team, callback) => callback(true));
      await deleteTeam(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When modifyTeam is called', () => {
    test('Then res.json should be called if the Team is modified', async () => {
      Team.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(false));

      await modifyTeam(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.send should be called if the Team is not modified', async () => {
      Team.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(true));

      await modifyTeam(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
