import Daemon from "../Daemon";

test("create Daemon", () => {
  const res = new Daemon("Daemon");

  expect(res).toEqual({
    name: "Daemon",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("levelUP Daemon", () => {
  const res = new Daemon("Daemon");

  res.levelUP();

  expect(res).toEqual({
    name: "Daemon",
    type: "Daemon",
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test("damage Daemon", () => {
  const res = new Daemon("Daemon");

  res.damage(25);

  expect(res).toEqual({
    name: "Daemon",
    type: "Daemon",
    health: 85,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
