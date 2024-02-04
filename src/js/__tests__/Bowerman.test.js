import Bowerman from "../Bowerman";

test("create Bowerman", () => {
  const res = new Bowerman("Bowerman");

  expect(res).toEqual({
    name: "Bowerman",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("levelUP Bowerman", () => {
  const res = new Bowerman("Bowerman");
  res.levelUP();
  expect(res).toEqual({
    name: "Bowerman",
    type: "Bowerman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test("damage Bowerman", () => {
  const res = new Bowerman("Bowerman");
  res.damage(25);
  expect(res).toEqual({
    name: "Bowerman",
    type: "Bowerman",
    health: 81.25,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
