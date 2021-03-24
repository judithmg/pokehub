import attackTypeMultiplier from '../battle/attackTypeMultiplier';

const attack = { type: '' };
let result;
const defendant = { types: [] };
describe('Given a attackTypeMultiplier', () => {
  describe('When it is called with an attack with a type and a defendant Pokemon with an array of types', () => {
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fire';
      defendant.types = ['fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'bug';
      defendant.types = ['fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'psychic';
      defendant.types = ['fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'dark';
      defendant.types = ['ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fire';
      defendant.types = ['fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fire';
      defendant.types = ['ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'dragon';
      defendant.types = ['dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fairy';
      defendant.types = ['ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fairy';
      defendant.types = ['ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fire';
      defendant.types = ['electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fairy';
      defendant.types = ['flying'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'dragon';
      defendant.types = ['poison'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'dragon';
      defendant.types = ['dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'dragon';
      defendant.types = ['electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'dark';
      defendant.types = ['normal'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'normal';
      defendant.types = ['fighting'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'electric';
      defendant.types = ['flying'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'electric';
      defendant.types = ['electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fairy';
      defendant.types = ['steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'steel';
      defendant.types = ['electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'bug';
      defendant.types = ['fighting'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represents the attack modifier', () => {
      attack.type = 'fighting';
      defendant.types = ['fighting'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Fighting'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Flying'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Poison'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Ground'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Rock'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Bug'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Normal';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Flying'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Poison'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Ground'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Rock'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Bug'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fighting';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Poison'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Ground'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Rock'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Bug'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Flying';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Ground'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Rock'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Bug'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Poison';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Rock'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Bug'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ground';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Bug'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Rock';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Ghost'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Bug';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ghost';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Fire'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Steel';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Water'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fire';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Grass'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Water';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Grass';
      defendant.types = ['Electric'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Grass';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Grass';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Grass';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Grass';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Grass';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Electric';
      defendant.types = ['Psychic'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Electric';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Electric';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Electric';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Electric';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Psychic';
      defendant.types = ['Ice'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Psychic';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Psychic';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Psychic';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ice';
      defendant.types = ['Dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ice';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Ice';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Dragon';
      defendant.types = ['Dark'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Dragon';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Dragon';
      defendant.types = ['Steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Electric';
      defendant.types = ['Ground'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Fairy';
      defendant.types = ['dragon'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'ghost';
      defendant.types = ['normal'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'grass';
      defendant.types = ['ground'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'ice';
      defendant.types = ['steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'Dark';
      defendant.types = ['Fairy'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'psychic';
      defendant.types = ['poison'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'psychic';
      defendant.types = ['steel'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'water';
      defendant.types = ['rock'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
    test('It should return a number that represent the attack modifier', () => {
      attack.type = 'ground';
      defendant.types = ['flying'];
      result = attackTypeMultiplier(attack, defendant);
      expect(typeof (result)).toBe('number');
    });
  });
});
