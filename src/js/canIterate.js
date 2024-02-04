export default function canIterate(something) {
  try {
    const objPrototype = Object.getPrototypeOf(something);
    if (objPrototype[["Symbol(Symbol.iterator)"]]) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
canIterate(null);
