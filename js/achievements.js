const achievementSystem = {

  achievements: [

    {
      id: "first-session",
      name: "First Touch",
      icon: "⚽",
      description: "Complete your first training session.",
      xp: 50
    },

    {
      id: "cone-commander",
      name: "Cone Commander",
      icon: "📍",
      description: "Complete 5 cone drills.",
      xp: 100
    },

    {
      id: "silent-feet",
      name: "Silent Feet",
      icon: "👣",
      description: "Complete 10 ball mastery drills.",
      xp: 150
    },

    {
      id: "game-reader",
      name: "Game Reader",
      icon: "🧠",
      description: "Complete 10 Football IQ lessons.",
      xp: 200
    },

    {
      id: "iron-legs",
      name: "Iron Legs",
      icon: "🦵",
      description: "Complete 10 plyometric sessions.",
      xp: 200
    },

    {
      id: "never-miss",
      name: "Never Miss",
      icon: "🔥",
      description: "Maintain a 30-day training streak.",
      xp: 500
    },

    {
      id: "complete-footballer",
      name: "Complete Footballer",
      icon: "👑",
      description: "Complete training across every major skill category.",
      xp: 1000
    }

  ],

  getXP() {
    return Number(localStorage.getItem("footballLabXP")) || 0;
  },

  addXP(amount) {

    const currentXP = this.getXP();

    const newXP = currentXP + amount;

    localStorage.setItem(
      "footballLabXP",
      newXP
    );

    return newXP;
  },

  getCompleted() {

    return JSON.parse(
      localStorage.getItem("footballLabAchievements")
    ) || [];

  },

  unlock(id) {

    const completed = this.getCompleted();

    if (completed.includes(id)) {
      return false;
    }

    const achievement =
      this.achievements.find(
        item => item.id === id
      );

    if (!achievement) {
      return false;
    }

    completed.push(id);

    localStorage.setItem(
      "footballLabAchievements",
      JSON.stringify(completed)
    );

    this.addXP(achievement.xp);

    return achievement;
  }

};
