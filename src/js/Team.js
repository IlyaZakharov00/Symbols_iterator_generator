export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error("Этот персонаж уже добавлен в команду!");
    } else this.members.add(person);
  }

  addAll(...person) {
    person.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    const arr = [];
    this.members.forEach((item) => arr.push(item));
    console.log(arr);
    return arr;
  }

  *[Symbol.iterator]() {
    for (const item of this.members) {
      yield item;
    }
  }
}
