import Zombie from "../Zombie";

test("create Zombie", () => {
  const res = new Zombie("Zombie");

  expect(res).toEqual({
    name: "Zombie",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("levelUP Zombie", () => {
  const res = new Zombie("Zombie");

  res.levelUP();

  expect(res).toEqual({
    name: "Zombie",
    type: "Zombie",
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test("damage Zombie", () => {
  const res = new Zombie("Zombie");

  res.damage(25);

  expect(res).toEqual({
    name: "Zombie",
    type: "Zombie",
    health: 77.5,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
