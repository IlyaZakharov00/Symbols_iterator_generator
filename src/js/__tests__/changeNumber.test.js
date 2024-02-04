import changeFormatNumber from "../changeNumber";

test("change number 1", () => {
  const number1 = "8 (927) 000-00-00";
  const res = changeFormatNumber(number1);

  expect(res).toEqual("89270000000");
});

test("change number 2", () => {
  const number2 = "+7 960 000 00 00";
  const res = changeFormatNumber(number2);

  expect(res).toEqual("+79600000000");
});

test("change number 3", () => {
  const number3 = "+86 000 000 0000";
  const res = changeFormatNumber(number3);

  expect(res).toEqual("+860000000000");
});
