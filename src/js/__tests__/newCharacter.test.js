import newCharacter from "../newCharacter";

describe("Character", () => {
  describe("constructor", () => {
    it("should create character with valid params", () => {
      const person = new newCharacter("Ilya", "Bowerman");

      expect(person.name).toBe("Ilya");
      expect(person.type).toBe("Bowerman");
    });

    it("should throw on invalid type", () => {
      expect(() => {
        new newCharacter("Ilya", "Student");
      }).toThrowError("Ошибка! Неизвестный тип!");
    });

    it("should throw on invalid name", () => {
      expect(() => {
        new newCharacter("I", "Bowerman");
      }).toThrowError("Ошибка! Имя должно содержать от 2 до 10 символов!");
    });
  });

//   describe("levelUp", () => {
//     it("should throw error for dead player", () => {
//       const person = new newCharacter("Ilya", "Bowerman");
//       person.health = 0;

//       expect(() => person.levelUP()).toThrowError(
//         "Ошибка! Уровень здоровья равен 0!"
//       );
//     });
//   });

//   describe("damage", () => {
//     it("should reduce health with defence factor", () => {
//       const person = new newCharacter("Ilya", "Bowerman");
//       person.health = 100;
//       person.defence = 10;
//       person.damage(50);

//       expect(person.health).toBeLessThan(100);
//       expect(person.health).toBeGreaterThan(0);
//     });

//     it("should not reduce if health is 0", () => {
//       const person = new newCharacter("Ilya", "Bowerman");
//       person.health = 0;

//       expect(() => person.damage(50)).toThrowError(
//         "Ошибка! Уровень здоровья равен 0!"
//       );
//     });
//   });
});
