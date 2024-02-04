import ErrorRepository from "../ErrorRepository";
test("should receive human-readable description of the error", () => {
  const errorRepository = new ErrorRepository();

  errorRepository.addCode(400, "Ошибка 400");
  errorRepository.addCode(401, "Ошибка 401");
  errorRepository.addCode(402, "Ошибка 402");
  errorRepository.addCode(402, "Ошибка 403");

  const received = errorRepository.translate(400);
  const expected = "Ошибка 400";
  expect(received).toBe(expected);
});

test("should receive message -Unknown error-", () => {
  const errorRepository = new ErrorRepository();

  errorRepository.addCode(400, "Ошибка 400");
  errorRepository.addCode(401, "Ошибка 401");
  errorRepository.addCode(402, "Ошибка 402");
  errorRepository.addCode(402, "Ошибка 403");

  const received = errorRepository.translate(606);
  const expected = "Unknown error";

  expect(received).toBe(expected);
});
