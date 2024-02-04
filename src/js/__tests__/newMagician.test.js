import newMagician from "../newMagician";

test("create newMagician", () => {
  const res = new newMagician("Magician");

  expect(res).toEqual({
    name: "Magician",
    type: "Magician",
    health: 100,
    level: 1,
    attackPower: 10,
    defence: 40,
  });
});

test("create stonedStatus ", () => {
  const res = new newMagician("Magician");
  res.stoned = true;

  expect(res.stoned).toEqual(true);
});

test("create distance", () => {
  const res = new newMagician("Magician");
  res.distance = 2;

  expect(res.distance).toEqual(2);
});

test("create attackPower", () => {
  const res = new newMagician("Magician");
  res.attack = 100;

  expect(res.attackPower).toEqual(100);
});

test("create attackPower with stonedStatus true", () => {
  const res = new newMagician("Magician");
  res.stoned = true;
  res.distance = 2;
  res.attack = 100;

  expect(res.attack).toEqual(85);
});

test("create attackPower with stonedStatus false", () => {
  const res = new newMagician("Magician");
  res.stoned = false;
  res.distance = 2;
  res.attack = 100;

  expect(res.attack).toEqual(90);
});

test("set attack with 0", () => {
  const res = new newMagician("Magician");
  const res1 = () => (res.attack = 0);

  expect(res1).toThrow("Нельзя атаковать противника");
});
// test("levelUP Magician", () => {
//   const res = new Magician("Magician");

//   res.levelUP();

//   expect(res).toEqual({
//     name: "Magician",
//     type: "Magician",
//     health: 100,
//     level: 2,
//     attack: 12,
//     defence: 48,
//   });
// });

// test("damage Magician", () => {
//   const res = new Magician("Magician");

//   res.damage(25);

//   expect(res).toEqual({
//     name: "Magician",
//     type: "Magician",
//     health: 85,
//     level: 1,
//     attack: 10,
//     defence: 40,
//   });
// });
