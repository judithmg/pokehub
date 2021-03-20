const {
  createUser,
  getAllUsers,
  getOneUserByBody,
  getOneUserByParams,
  deleteUser,
  addTeamToUser,
  modifyUser,
} = require('../controllers/userController');

const User = require('../models/userModel');

jest.mock('../models/userModel');

describe('Given a userController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        email: 'asdfg@gmail.com',
      },
      params: { userId: 4 },
    };
    res = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn(),

    };
  });
  describe('When createUser is called', () => {
    test('Then res.json should be called if the user is created', () => {
      createUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When getAllUsers is called', () => {
    test('Then res.json should be called if all users are found', () => {
      User.find.mockImplementationOnce((query, callback) => callback(false));

      getAllUsers(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if  users are not found', () => {
      User.find.mockImplementationOnce((query, callback) => callback(true));

      getAllUsers(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When addTeamToUser is called', () => {
    test('Then res.json should be called if all users are found', () => {
      User.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(false));

      addTeamToUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.send should be called if  users are not found', () => {
      User.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(true));

      addTeamToUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
  describe('When getOneUserByBody is called', () => {
    test('Then res.json should be called if the user is found', async () => {
      User.findOne.mockImplementationOnce((email, callback) => callback(false));

      await getOneUserByBody(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if the user is not found', async () => {
      User.findOne.mockImplementationOnce((email, callback) => callback(true));

      await getOneUserByBody(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When getOneUserByParams is called', () => {
    test('Then res.json should be called if the user is found', async () => {
      User.findById.mockImplementationOnce((email, callback) => callback(false));

      await getOneUserByParams(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if the user is not found', async () => {
      User.findById.mockImplementationOnce((email, callback) => callback(true));

      await getOneUserByParams(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When deleteUser is called', () => {
    test('Then res.json should be called if deletion is successful', async () => {
      User.findOneAndRemove.mockImplementationOnce((user, callback) => callback(false));
      await deleteUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.status should be called if deletion can not be completed', async () => {
      User.findOneAndRemove.mockImplementationOnce((user, callback) => callback(true));
      await deleteUser(req, res);
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('When modifyUser is called', () => {
    test('Then res.json should be called if the user is modified', async () => {
      User.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(false));

      await modifyUser(req, res);
      expect(res.json).toHaveBeenCalled();
    });
    test('Then res.send should be called if the user is not modified', async () => {
      User.findOneAndUpdate.mockImplementationOnce((query,
        update,
        options,
        callback) => callback(true));

      await modifyUser(req, res);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
