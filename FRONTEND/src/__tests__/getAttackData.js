import getAttackData from '../battle/getAttackData';

const result = getAttackData('Absorb', [{
  num: 71,
  accuracy: 100,
  basePower: 20,
  category: 'Special',
  desc: 'The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.',
  shortDesc: 'User recovers 50% of the damage dealt.',
  id: 'absorb',
  name: 'Absorb',
  pp: 25,
  priority: 0,
  flags: {
    protect: 1,
    mirror: 1,
    heal: 1,
  },
  drain: [
    1,
    2,
  ],
  secondary: false,
  target: 'normal',
  type: 'Grass',
  zMovePower: 100,
  contestType: 'Clever',
}]);
describe('Given a getAttackData', () => {
  describe('When it is called on a battle', () => {
    test('Then it should return an object with the data from the move it was called with', () => {
      expect(typeof (result)).toBe('object');
    });
    test('Then it should return an object with the data from the move it was called with', () => {
      expect(result).toEqual({
        basePower: 20,
        shortDesc: 'User recovers 50% of the damage dealt.',
        pp: 25,
        type: 'Grass',
        category: 'Special',
        name: 'Absorb',
      });
    });
  });
});
