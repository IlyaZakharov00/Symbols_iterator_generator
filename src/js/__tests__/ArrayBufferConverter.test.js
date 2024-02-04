import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

test("should receive json-string", () => {
  const converter = new ArrayBufferConverter();
  const bufferDate = getBuffer();
  converter.load(bufferDate);
  const convertedData = converter.toString();

  expect(convertedData).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
});

test("throw on no data loaded", () => {
  const converter = new ArrayBufferConverter();
  const convertedData = () => converter.toString();

  expect(convertedData).toThrow("Объекта не существует!");
});
