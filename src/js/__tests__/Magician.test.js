import Magician from "../Magician";

test("create Magician", () => {
  const res = new Magician("Magician");

  expect(res).toEqual({
    name: "Magician",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("levelUP Magician", () => {
  const res = new Magician("Magician");

  res.levelUP();

  expect(res).toEqual({
    name: "Magician",
    type: "Magician",
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test("damage Magician", () => {
  const res = new Magician("Magician");

  res.damage(25);

  expect(res).toEqual({
    name: "Magician",
    type: "Magician",
    health: 85,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
