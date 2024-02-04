import Team from "../Team";
import Zombie from "../Zombie";
import Bowerman from "../Bowerman";
import Magician from "../Magician";
import Swordsman from "../Swordsman";

test("method 'add'. Add person second time", () => {
  const Ilya = new Zombie("Ilya");
  const newTeam = new Team();

  newTeam.add(Ilya);
  const addSecond = () => newTeam.add(Ilya);

  const expected = "Этот персонаж уже добавлен в команду!";

  expect(addSecond).toThrow(expected);
});

test("method 'add'", () => {
  const Ilya = new Zombie("Ilya");
  const newTeam = new Team();

  newTeam.add(Ilya);

  const expected = newTeam.members.has(Ilya);
  expect(expected).toBe(true);
});

test("method 'addAll'", () => {
  const Ilya = new Zombie("Ilya");
  const user1 = new Bowerman("user1");
  const user2 = new Magician("user2");
  const user3 = new Swordsman("user3");

  const newTeam = new Team();

  newTeam.addAll(Ilya, user1, user2, user3);
  const expected = newTeam.members.size;
  const result = 4;

  expect(expected).toBe(result);
});

test("method 'addAll' equal person", () => {
  const Ilya = new Zombie("Ilya");
  const user1 = new Bowerman("user1");
  const user2 = new Magician("user2");
  const user3 = new Swordsman("user3");

  const newTeam = new Team();

  newTeam.addAll(Ilya, user1, user2, user3, Ilya);
  const expected = newTeam.members.size;
  const result = 4;

  expect(expected).toBe(result);
});

test("method 'toArray'", () => {
  const Ilya = new Zombie("Ilya");
  const user1 = new Bowerman("user1");
  const user2 = new Magician("user2");
  const user3 = new Swordsman("user3");

  const newTeam = new Team();

  newTeam.addAll(Ilya, user1, user2, user3);

  const result = newTeam.toArray();

  const expected = [Ilya, user1, user2, user3];

  expect(result).toStrictEqual(expected);
});

