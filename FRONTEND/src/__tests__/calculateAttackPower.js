import calculateAttackPower from '../battle/calculateAttackPower';

const attackData = { basePower: 100, category: 'physical' };
const attacker = {
  level: 100,
  battleStats: {
    hp: 55,
    atk: 90,
    def: 80,
    spa: 50,
    spd: 105,
    spe: 96,
  },
};
const defendant = {
  battleStats: {
    hp: 55,
    atk: 90,
    def: 80,
    spa: 50,
    spd: 105,
    spe: 96,
  },
};

const modifier = 2;

describe('Given a calculateAttackPower', () => {
  describe('When it is called on a battle', () => {
    test('Then it should return a number that will be used as attack power', () => {
      expect(typeof (calculateAttackPower(attackData, attacker, defendant, modifier)))
        .toBe('number');
    });
    test('Then it should return a number bigger than 0 if attack category is special', () => {
      attackData.category = 'special';
      expect(calculateAttackPower(attackData, attacker, defendant, modifier))
        .toBe(84);
    });
    test('Then it should return a number bigger than 0 if attack category is physical', () => {
      attackData.category = 'physical';
      expect(calculateAttackPower(attackData, attacker, defendant, modifier))
        .toBe(192);
    });
    test('Then it should return 0 if attack category is other', () => {
      attackData.category = 'state';
      expect(calculateAttackPower(attackData, attacker, defendant, modifier))
        .toBe(0);
    });
  });
});
