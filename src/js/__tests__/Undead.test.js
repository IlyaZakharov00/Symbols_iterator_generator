import Undead from "../Undead";

test("create Undead", () => {
  const res = new Undead("Undead");

  expect(res).toEqual({
    name: "Undead",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("levelUP Undead", () => {
  const res = new Undead("Undead");

  res.levelUP();

  expect(res).toEqual({
    name: "Undead",
    type: "Undead",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test("damage Undead", () => {
  const res = new Undead("Undead");

  res.damage(25);

  expect(res).toEqual({
    name: "Undead",
    type: "Undead",
    health: 81.25,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
