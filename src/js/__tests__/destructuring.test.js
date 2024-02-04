import getSpecial from "../destructuring";
import Bowerman from "../Bowerman";

test("special of Object", () => {
  const object = new Bowerman("Bowerman");
  object.special = {
    id: 8,
    name: "Двойной выстрел",
    icon: "http://...",
    description: "Двойной выстрел наносит двойной урон",
  };

  const res = getSpecial(object);

  expect(res).toEqual([
    { id: 8 },
    { name: "Двойной выстрел" },
    { icon: "http://..." },
    { description: "Двойной выстрел наносит двойной урон" },
  ]);
});

test("special of Object", () => {
  const object = new Bowerman("Bowerman");
  object.special = {
    id: 8,
    name: "Двойной выстрел",
    icon: "http://...",
  };

  const res = getSpecial(object);

  expect(res).toEqual([
    { id: 8 },
    { name: "Двойной выстрел" },
    { icon: "http://..." },
    { description: "Описание недоступно" },
  ]);
});
