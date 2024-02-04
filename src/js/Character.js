const types = [
  "Bowerman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
  "Test Validator",
];

export default class Character {
  constructor(name, type) {
    if (name.length > 1 && name.length < 10) {
      this.name = name;
    } else throw new Error("Ошибка! Имя должно содержать от 2 до 10 символов!");
    if (types.includes(type)) {
      this.type = type;
      this.health = 100;
      this.level = 1;
    } else throw new Error("Ошибка! Неизвестный тип!");
  }
  levelUP() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error("Ошибка! Уровень здоровья равен 0!");
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error("Ошибка! Уровень здоровья равен 0!");
  }
}
