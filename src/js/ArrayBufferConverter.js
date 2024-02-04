export default class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }
  toString() {
    if (!this.bufferView) {
      throw new Error("Объекта не существует!");
    }

    let result = "";

    this.bufferView.forEach((el) => {
      result += String.fromCharCode(el);
    });

    return result;
  }
}
