export default class ErrorRepository {
  constructor() {
    this.errList = new Map();
  }

  addCode(code, discription) {
    this.errList.set(code, discription);
  }

  translate(code) {
    if (this.errList.has(code)) {
      return this.errList.get(code);
    }
    return "Unknown error";
  }
}
