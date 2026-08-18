const footballTraining = {

  positions: {
    GK: {
      name: "Goalkeeper",
      focus: [
        "Footwork",
        "Handling",
        "Distribution",
        "Positioning",
        "Reactions",
        "Explosiveness"
      ]
    },

    CB: {
      name: "Center Back",
      focus: [
        "Defensive positioning",
        "Scanning",
        "1v1 defending",
        "Aerial ability",
        "Passing",
        "Acceleration"
      ]
    },

    FB: {
      name: "Full Back",
      focus: [
        "1v1 defending",
        "Crossing",
        "Recovery runs",
        "Overlapping",
        "Acceleration",
        "Stamina"
      ]
    },

    DM: {
      name: "Defensive Midfielder",
      focus: [
        "Scanning",
        "Passing",
        "Press resistance",
        "Positioning",
        "Interceptions",
        "Transitions"
      ]
    },

    CM: {
      name: "Central Midfielder",
      focus: [
        "Passing",
        "Scanning",
        "Ball carrying",
        "Movement",
        "Decision making",
        "Stamina"
      ]
    },

    AM: {
      name: "Attacking Midfielder",
      focus: [
        "Creativity",
        "First touch",
        "Passing",
        "Dribbling",
        "Finishing",
        "Movement"
      ]
    },

    WINGER: {
      name: "Winger",
      focus: [
        "Acceleration",
        "1v1",
        "Dribbling",
        "Crossing",
        "Cutting inside",
        "Finishing"
      ]
    },

    ST: {
      name: "Striker",
      focus: [
        "Finishing",
        "Movement",
        "First touch",
        "Hold-up play",
        "Acceleration",
        "Positioning"
      ]
    }
  },

  levels: {
    beginner: {
      name: "Beginner",
      multiplier: 1
    },

    intermediate: {
      name: "Intermediate",
      multiplier: 1.2
    },

    advanced: {
      name: "Advanced",
      multiplier: 1.5
    },

    elite: {
      name: "Elite",
      multiplier: 1.8
    }
  },

  goals: {
    ballMastery: "Ball Mastery",
    passing: "Passing",
    defending: "Defending",
    shooting: "Finishing",
    speed: "Speed & Acceleration",
    agility: "Agility",
    plyometrics: "Plyometrics",
    stamina: "Stamina",
    footballIQ: "Football IQ"
  },

  drills: [

    {
      id: "foundations",
      name: "Ball Foundations",
      category: "Ball Mastery",
      duration: 60,
      sets: 3,
      reps: "30 seconds",
      difficulty: "Beginner",
      xp: 20,
      equipment: ["Football"],
      description:
        "Use alternating touches with the inside of both feet while keeping the ball close.",
      coaching:
        "Stay light on your feet. Keep your head up whenever possible."
    },

    {
      id: "inside-outside",
      name: "Inside-Outside Touches",
      category: "Ball Mastery",
      duration: 90,
      sets: 3,
      reps: "30 seconds each foot",
      difficulty: "Beginner",
      xp: 25,
      equipment: ["Football"],
      description:
        "Move the ball using controlled inside and outside touches.",
      coaching:
        "Keep the ball within playing distance and gradually increase speed."
    },

    {
      id: "slalom",
      name: "Cone Slalom",
      category: "Dribbling",
      duration: 120,
      sets: 5,
      reps: "5 runs",
      difficulty: "Intermediate",
      xp: 35,
      equipment: ["Football", "6 cones"],
      description:
        "Dribble through a line of cones while maintaining close control.",
      coaching:
        "Use small touches around the cones and accelerate after the final cone."
    },

    {
      id: "box-control",
      name: "Box Control",
      category: "First Touch",
      duration: 120,
      sets: 4,
      reps: "45 seconds",
      difficulty: "Intermediate",
      xp: 35,
      equipment: ["Football", "4 cones"],
      description:
        "Move around a four-cone box while receiving and controlling the ball.",
      coaching:
        "Scan before receiving and prepare your next action before the ball arrives."
    },

    {
      id: "defensive-shuffle",
      name: "Defensive Shuffle",
      category: "Defending",
      duration: 90,
      sets: 4,
      reps: "20 seconds",
      difficulty: "Intermediate",
      xp: 30,
      equipment: ["4 cones"],
      description:
        "Move laterally between cones while maintaining a defensive body position.",
      coaching:
        "Stay balanced. Do not cross your feet unnecessarily."
    },

    {
      id: "acceleration",
      name: "5-Metre Acceleration",
      category: "Speed",
      duration: 120,
      sets: 6,
      reps: "5 metres",
      difficulty: "Intermediate",
      xp: 35,
      equipment: ["2 cones"],
      description:
        "Explode from a standing position over five metres.",
      coaching:
        "Drive your arms and push aggressively into the ground."
    },

    {
      id: "broad-jump",
      name: "Standing Broad Jump",
      category: "Plyometrics",
      duration: 120,
      sets: 4,
      reps: "5 jumps",
      difficulty: "Intermediate",
      xp: 40,
      equipment: ["Open space"],
      description:
        "Jump horizontally while focusing on explosive power and controlled landing.",
      coaching:
        "Land softly with your knees controlled and aligned."
    },

    {
      id: "weak-foot",
      name: "Weak Foot Challenge",
      category: "Ball Mastery",
      duration: 180,
      sets: 3,
      reps: "60 seconds",
      difficulty: "Advanced",
      xp: 50,
      equipment: ["Football", "4 cones"],
      description:
        "Complete controlled touches and dribbling patterns using your weaker foot.",
      coaching:
        "Quality first. Increase speed only when control is consistent."
    }

  ]

};

    
