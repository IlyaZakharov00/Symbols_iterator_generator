import Validator from "../regex";

test("test Validator", () => {
  const validatorObject = new Validator("Test");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(true);
});

test("2 test Validator", () => {
  const validatorObject = new Validator("123Test");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(false);
});

test("3 test Validator", () => {
  const validatorObject = new Validator("Test123");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(false);
});

test("4 test Validator", () => {
  const validatorObject = new Validator("Te1234st");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(true);
});

test("5 test Validator", () => {
  const validatorObject = new Validator("-Test");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(false);
});

test("6 test Validator", () => {
  const validatorObject = new Validator("Test-");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(false);
});

test("7 test Validator", () => {
  const validatorObject = new Validator("_Test");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(false);
});

test("8 test Validator", () => {
  const validatorObject = new Validator("Test_");
  const res = validatorObject.validateUsername();

  expect(res).toEqual(false);
});
