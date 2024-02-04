import newCharacter from "./newCharacter";

export default class newDaemon extends newCharacter {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
console.log(newDaemon);
