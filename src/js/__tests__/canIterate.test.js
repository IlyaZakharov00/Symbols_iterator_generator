import canIterate from "../canIterate";

test("can iterate number", () => {
  let result = canIterate(10);

  expect(result).toStrictEqual(false);
});

test("can iterate null", () => {
  let result = canIterate(null);

  expect(result).toStrictEqual(false);
});

test("can iterate string", () => {
  let result = canIterate("test");

  expect(result).toStrictEqual(true);
});

test("can iterate set", () => {
  let result = canIterate(new Set());

  expect(result).toStrictEqual(true);
});

test("can iterate map", () => {
  let result = canIterate(new Map());

  expect(result).toStrictEqual(true);
});

test("can iterate nothing", () => {
  let result = canIterate();

  expect(result).toStrictEqual(false);
});
