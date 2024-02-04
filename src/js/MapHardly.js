export const setings = new Map();

export default class Settings {
  constructor(theme = "dark", music = "trance", difficulty = "easy") {
    this.theme = theme;
    this.music = music;
    this.difficulty = difficulty;

    setings.set(this, {
      theme,
      music,
      difficulty,
    });
  }

  getSettings() {
    return setings.get(this);
  }
}

// light', 'gray'
// 'pop', 'rock', 'chillout', 'off'
// 'normal', 'hard', 'nightmare'
