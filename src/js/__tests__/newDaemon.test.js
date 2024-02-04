import newDaemon from "../newDaemon";

test("create newDaemon", () => {
  const res = new newDaemon("Daemon");

  expect(res).toEqual({
    name: "Daemon",
    type: "Daemon",
    health: 100,
    level: 1,
    attackPower: 10,
    defence: 40,
  });
});

test("create stonedStatus ", () => {
  const res = new newDaemon("Daemon");
  res.stoned = true;

  expect(res.stoned).toEqual(true);
});

test("create distance", () => {
  const res = new newDaemon("Daemon");
  res.distance = 2;

  expect(res.distance).toEqual(2);
});

test("create attackPower", () => {
  const res = new newDaemon("Daemon");
  res.attack = 100;

  expect(res.attackPower).toEqual(100);
});

test("create attackPower with stonedStatus true", () => {
  const res = new newDaemon("Daemon");
  res.stoned = true;
  res.distance = 2;
  res.attack = 100;

  expect(res.attack).toEqual(85);
});

test("create attackPower with stonedStatus false", () => {
  const res = new newDaemon("Daemon");
  res.stoned = false;
  res.distance = 2;
  res.attack = 100;

  expect(res.attack).toEqual(90);
});

test("set attack with 0", () => {
  const res = new newDaemon("Daemon");
  const res1 = () => (res.attack = 0);

  expect(res1).toThrow("Нельзя атаковать противника");
});
