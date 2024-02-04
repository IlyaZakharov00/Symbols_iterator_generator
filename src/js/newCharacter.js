import Character from "./Character";

export default class newCharacter extends Character {
  constructor(name, type) {
    super(name, type);
  }

  set stoned(value) {
    this.stonedStatus = value;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set distance(value) {
    this.distanceAttack = value;
  }

  get distance() {
    return this.distanceAttack;
  }

  set attack(value) {
    if (value <= 0) {
      throw new Error("Нельзя атаковать противника");
    }
    this.attackPower = value;
  }

  get attack() {
    let baseAttack = this.attackPower;
    let lineAttackLow = baseAttack * (1 - (this.distanceAttack - 1) / 10);
    if (this.stonedStatus) {
      let attackWithStoned = lineAttackLow - Math.log2(this.distanceAttack) * 5;
      // console.log(attackWithStoned);
      this.attackPower = attackWithStoned;
      return this.attackPower;
    }
    this.attackPower = lineAttackLow;
    // console.log(baseAttack, lineAttackLow);
    return this.attackPower;
  }
}
