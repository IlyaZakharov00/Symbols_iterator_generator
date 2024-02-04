import orderByProps from "../sortObject";
import Bowerman from "../Bowerman";

test("sort Object", () => {
  const object = new Bowerman("Bowerman");

  const res = orderByProps(object, ["name", "level"]);

  expect(res).toEqual([
    { key: "name", value: "Bowerman" },
    { key: "level", value: 1 },
    { key: "attack", value: 25 },
    { key: "defence", value: 25 },
    { key: "health", value: 100 },
    { key: "type", value: "Bowerman" },
  ]);
});
