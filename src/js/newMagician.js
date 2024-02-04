import newCharacter from "./newCharacter";

export default class newMagician extends newCharacter {
  constructor(name, type = "Magician") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
console.log(newMagician);
