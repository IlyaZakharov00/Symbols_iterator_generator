import Character from "./Character";

export default class Validator extends Character {
  constructor(name, type = "Test Validator") {
    super(name, type);
    this.name = name;
    this.attack = "Test";
    this.defence = "Test";
  }
  validateUsername() {
    console.log(this.name);
    return /^[a-zA-Z]+[a-zA-Z-_\d{0,3}]*[a-z]+$/g.test(this.name);
  }
}
