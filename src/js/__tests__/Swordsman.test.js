import Swordsman from "../Swordsman";

test("create Swordsman", () => {
  const res = new Swordsman("Swordsman");

  expect(res).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("levelUP Swordsman", () => {
  const res = new Swordsman("Swordsman");

  res.levelUP();

  expect(res).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test("damage Swordsman", () => {
  const res = new Swordsman("Swordsman");

  res.damage(25);

  expect(res).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    health: 77.5,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
