/* =========================================
   THE FOOTBALL LAB
   PERSONALIZED TRAINING ENGINE
========================================= */


let playerProfile = {
  position: null,
  goals: [],
  level: null
};

let currentSession = [];
let currentDrillIndex = 0;

let timerInterval = null;
let remainingSeconds = 0;


/* =========================================
   POSITION DATA
========================================= */

const footballTraining = {

  positions: {

    GK: {
      name: "Goalkeeper",
      focus: [
        "Footwork",
        "Handling",
        "Distribution",
        "Positioning",
        "Reactions"
      ]
    },

    CB: {
      name: "Center Back",
      focus: [
        "Defending",
        "Scanning",
        "1v1 defending",
        "Passing",
        "Positioning"
      ]
    },

    FB: {
      name: "Full Back",
      focus: [
        "1v1 defending",
        "Crossing",
        "Recovery runs",
        "Overlapping",
        "Acceleration"
      ]
    },

    DM: {
      name: "Defensive Midfielder",
      focus: [
        "Scanning",
        "Passing",
        "Press resistance",
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
        "Decision making"
      ]
    },

    AM: {
      name: "Attacking Midfielder",
      focus: [
        "Creativity",
        "First touch",
        "Passing",
        "Dribbling",
        "Finishing"
      ]
    },

    WINGER: {
      name: "Winger",
      focus: [
        "Acceleration",
        "1v1",
        "Dribbling",
        "Crossing",
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
        "Positioning"
      ]
    }

  },


  levels: {

    beginner: {
      name: "Beginner"
    },

    intermediate: {
      name: "Intermediate"
    },

    advanced: {
      name: "Advanced"
    },

    elite: {
      name: "Elite"
    }

  },


  goals: {

    ballMastery: "Ball Mastery",

    firstTouch: "First Touch",

    dribbling: "Dribbling",

    passing: "Passing",

    defending: "Defending",

    finishing: "Finishing",

    speed: "Speed & Acceleration",

    agility: "Agility",

    plyometrics: "Plyometrics",

    stamina: "Stamina",

    footballIQ: "Football IQ",

    weakFoot: "Weak Foot",

    positioning: "Positioning"

  },


  drills: [

    {
      id: "foundations",

      name: "Ball Foundations",

      categories: [
        "Ball Mastery",
        "First Touch"
      ],

      duration: 60,

      sets: 3,

      reps: "30 seconds",

      difficulty: "Beginner",

      xp: 20,

      equipment: [
        "Football"
      ],

      video: "",

      description:
        "Use alternating touches with the inside of both feet while keeping the ball close.",

      coaching:
        "Stay light on your feet. Keep the ball within playing distance and look up whenever possible.",

      mistakes:
        [
          "Taking touches that are too large.",
          "Standing too upright.",
          "Only looking at the ball."
        ]

    },


    {
      id: "inside-outside",

      name: "Inside-Outside Touches",

      categories: [
        "Ball Mastery",
        "Dribbling"
      ],

      duration: 90,

      sets: 3,

      reps: "30 seconds each foot",

      difficulty: "Beginner",

      xp: 25,

      equipment: [
        "Football"
      ],

      video: "",

      description:
        "Move the ball using controlled inside and outside touches.",

      coaching:
        "Keep the ball within playing distance and gradually increase speed.",

      mistakes:
        [
          "Touching the ball too far away.",
          "Using only one foot.",
          "Moving too quickly before control is established."
        ]

    },


    {
      id: "slalom",

      name: "Cone Slalom",

      categories: [
        "Dribbling",
        "Ball Mastery",
        "Agility"
      ],

      duration: 120,

      sets: 5,

      reps: "5 runs",

      difficulty: "Intermediate",

      xp: 35,

      equipment: [
        "Football",
        "6 cones"
      ],

      video: "videos/cone-slalom.mp4",

      description:
        "Dribble through a line of cones while maintaining close control.",

      coaching:
        "Use small touches around the cones and accelerate after the final cone.",

      mistakes:
        [
          "Taking large touches.",
          "Looking down constantly.",
          "Failing to accelerate after the final cone."
        ]

    },


    {
      id: "box-control",

      name: "Four-Cone First Touch Box",

      categories: [
        "First Touch",
        "Ball Mastery",
        "Passing"
      ],

      duration: 120,

      sets: 4,

      reps: "45 seconds",

      difficulty: "Intermediate",

      xp: 35,

      equipment: [
        "Football",
        "4 cones"
      ],

      video: "videos/first-touch-box.mp4",

      description:
        "Move around a four-cone box while receiving and controlling the ball.",

      coaching:
        "Scan before receiving and prepare your next action before the ball arrives.",

      mistakes:
        [
          "Receiving the ball underneath your body.",
          "Not scanning.",
          "Taking unnecessary touches."
        ]

    },


    {
      id: "defensive-shuffle",

      name: "Defensive Shuffle",

      categories: [
        "Defending",
        "Agility",
        "Positioning"
      ],

      duration: 90,

      sets: 4,

      reps: "20 seconds",

      difficulty: "Intermediate",

      xp: 30,

      equipment: [
        "4 cones"
      ],

      video: "videos/defensive-shuffle.mp4",

      description:
        "Move laterally between cones while maintaining a defensive body position.",

      coaching:
        "Stay balanced. Keep your body side-on and avoid crossing your feet unnecessarily.",

      mistakes:
        [
          "Standing too upright.",
          "Crossing your feet.",
          "Opening your hips too early."
        ]

    },


    {
      id: "acceleration",

      name: "5-Metre Acceleration",

      categories: [
        "Speed & Acceleration",
        "Agility"
      ],

      duration: 120,

      sets: 6,

      reps: "5 metres",

      difficulty: "Intermediate",

      xp: 35,

      equipment: [
        "2 cones"
      ],

      video: "videos/5m-acceleration.mp4",

      description:
        "Explode from a standing position over five metres.",

      coaching:
        "Drive your arms and push aggressively into the ground.",

      mistakes:
        [
          "Standing upright immediately.",
          "Taking slow first steps.",
          "Poor arm movement."
        ]

    },


    {
      id: "broad-jump",

      name: "Standing Broad Jump",

      categories: [
        "Plyometrics",
        "Speed & Acceleration"
      ],

      duration: 120,

      sets: 4,

      reps: "5 jumps",

      difficulty: "Intermediate",

      xp: 40,

      equipment: [
        "Open space"
      ],

      video: "videos/broad-jump.mp4",

      description:
        "Jump horizontally while focusing on explosive power and controlled landing.",

      coaching:
        "Land softly with your knees controlled and aligned.",

      mistakes:
        [
          "Landing with locked knees.",
          "Allowing knees to collapse inward.",
          "Poor balance on landing."
        ]

    },


    {
      id: "weak-foot",

      name: "Weak Foot Challenge",

      categories: [
        "Weak Foot",
        "Ball Mastery",
        "First Touch"
      ],

      duration: 180,

      sets: 3,

      reps: "60 seconds",

      difficulty: "Advanced",

      xp: 50,

      equipment: [
        "Football",
        "4 cones"
      ],

      video: "videos/weak-foot.mp4",

      description:
        "Complete controlled touches and dribbling patterns using your weaker foot.",

      coaching:
        "Quality first. Increase speed only when control is consistent.",

      mistakes:
        [
          "Avoiding the weaker foot.",
          "Prioritizing speed over control.",
          "Taking touches too far ahead."
        ]

    }

  ]

};


/* =========================================
   START TRAINING
========================================= */

function startTraining() {

  document.getElementById("mainWebsite").style.display = "none";

  const app =
    document.getElementById("trainingApp");

  app.classList.add("active");

  playerProfile = {
    position: null,
    goals: [],
    level: null
  };

  showPositionSelection();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   POSITION
========================================= */

function showPositionSelection() {

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>STEP 1 OF 3</small>

      <h2>What's your position?</h2>

      <p>
        Your position helps us understand which areas
        of football development matter most to you.
      </p>

    </div>


    <div class="selection-grid">

      ${Object.entries(
        footballTraining.positions
      ).map(([key, position]) => `

        <div
          class="selection-card ${
            playerProfile.position === key
              ? "selected"
              : ""
          }"
          onclick="selectPosition('${key}')"
        >

          <h3>
            ${position.name}
          </h3>

          <p>
            ${position.focus.join(" • ")}
          </p>

        </div>

      `).join("")}

    </div>


    <div class="training-navigation">

      <span class="selection-count">
        ${
          playerProfile.position
            ? "Position selected ✓"
            : "Select a position to continue"
        }
      </span>

      <button
        class="btn btn-primary"
        ${
          playerProfile.position
            ? ""
            : "disabled"
        }
        onclick="showGoalSelection()"
      >
        Next →
      </button>

    </div>

  `;

}


function selectPosition(position) {

  playerProfile.position = position;

  showPositionSelection();

}


/* =========================================
   GOALS — MULTI SELECT
========================================= */

function showGoalSelection() {

  if (!playerProfile.position) {

    alert("Please select your position first.");

    return;

  }

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>STEP 2 OF 3</small>

      <h2>What do you want to improve?</h2>

      <p>
        Select as many areas as you want.
        Your choices will be combined into one training program.
      </p>

    </div>


    <div class="selection-grid">

      ${Object.entries(
        footballTraining.goals
      ).map(([key, goal]) => `

        <div
          class="selection-card ${
            playerProfile.goals.includes(key)
              ? "selected"
              : ""
          }"
          onclick="toggleGoal('${key}')"
        >

          <h3>
            ${playerProfile.goals.includes(key) ? "✓ " : ""}
            ${goal}
          </h3>

          <p>
            Train your ${goal.toLowerCase()}.
          </p>

        </div>

      `).join("")}

    </div>


    <div class="training-navigation">

      <span class="selection-count">
        ${playerProfile.goals.length}
        training areas selected
      </span>

      <div>

        <button
          class="btn btn-outline"
          onclick="showPositionSelection()"
        >
          ← Back
        </button>

        <button
          class="btn btn-primary"
          onclick="showLevelSelection()"
          ${
            playerProfile.goals.length === 0
              ? "disabled"
              : ""
          }
        >
          Next →
        </button>

      </div>

    </div>

  `;

}


function toggleGoal(goal) {

  if (
    playerProfile.goals.includes(goal)
  ) {

    playerProfile.goals =
      playerProfile.goals.filter(
        item => item !== goal
      );

  } else {

    playerProfile.goals.push(goal);

  }

  showGoalSelection();

}


/* =========================================
   LEVEL
========================================= */

function showLevelSelection() {

  if (
    playerProfile.goals.length === 0
  ) {

    alert(
      "Select at least one training area."
    );

    return;

  }

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>STEP 3 OF 3</small>

      <h2>What's your current level?</h2>

      <p>
        Be honest. Your program will become harder
        as you improve.
      </p>

    </div>


    <div class="selection-grid">

      ${Object.entries(
        footballTraining.levels
      ).map(([key, level]) => `

        <div
          class="selection-card ${
            playerProfile.level === key
              ? "selected"
              : ""
          }"
          onclick="selectLevel('${key}')"
        >

          <h3>
            ${level.name}
          </h3>

          <p>
            ${
              key === "beginner"
                ? "I'm learning the fundamentals."
                : key === "intermediate"
                ? "I understand the basics and train regularly."
                : key === "advanced"
                ? "I'm a strong competitive player."
                : "I train and compete at a very high level."
            }
          </p>

        </div>

      `).join("")}

    </div>


    <div class="training-navigation">

      <button
        class="btn btn-outline"
        onclick="showGoalSelection()"
      >
        ← Back
      </button>

      <button
        class="btn btn-primary"
        ${
          playerProfile.level
            ? ""
            : "disabled"
        }
        onclick="generateProgram()"
      >
        Build My Program ⚡
      </button>

    </div>

  `;

}


function selectLevel(level) {

  playerProfile.level = level;

  showLevelSelection();

}


/* =========================================
   PROGRAM GENERATOR
========================================= */

function generateProgram() {

  if (!playerProfile.level) {

    alert("Please select your level.");

    return;

  }

  const selectedGoals =
    playerProfile.goals.map(
      key =>
        footballTraining.goals[key]
    );

  currentSession =
    footballTraining.drills.filter(
      drill =>
        drill.categories.some(
          category =>
            selectedGoals.includes(category)
        )
    );

  /*
    If fewer than 4 drills match the
    player's choices add useful drills.
  */

  if (currentSession.length < 4) {

    const additional =
      footballTraining.drills.filter(
        drill =>
          !currentSession.includes(drill)
      );

    currentSession =
      currentSession.concat(additional);

  }

  currentSession =
    currentSession.slice(0, 6);

  currentDrillIndex = 0;

  showProgram();

}


/* =========================================
   PROGRAM
========================================= */

function showProgram() {

  const position =
    footballTraining.positions[
      playerProfile.position
    ];

  const level =
    footballTraining.levels[
      playerProfile.level
    ];

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>YOUR PERSONAL PROGRAM</small>

      <h2>
        ${position.name} Development
      </h2>

      <p>
        ${level.name} level •
        ${playerProfile.goals.length}
        training areas selected.
      </p>

    </div>


    <div class="training-screen">

      <div class="training-meta">

        <span class="training-tag">
          ${position.name}
        </span>

        <span class="training-tag">
          ${level.name}
        </span>

        <span class="training-tag">
          ${currentSession.length} drills
        </span>

      </div>


      <h3>
        Today's Session
      </h3>

      <p style="color:var(--muted)">
        Complete each drill to earn XP and progress
        through your Football Lab journey.
      </p>


      <div class="training-list">

        ${currentSession.map(
          (drill, index) => `

          <div class="training-item">

            <strong>
              ${index + 1}. ${drill.name}
            </strong>

            <span>
              ${drill.duration}s • +${drill.xp} XP
            </span>

          </div>

        `
        ).join("")}

      </div>


      <button
        class="btn btn-primary"
        onclick="startDrill()"
      >
        ▶ Start Session
      </button>

    </div>

  `;

}


/* =========================================
   DRILL SCREEN
========================================= */

function startDrill() {

  clearInterval(timerInterval);

  const drill =
    currentSession[currentDrillIndex];

  const screen =
    document.getElementById("trainingScreen");


  screen.innerHTML = `

    <div class="section-heading">

      <small>
        DRILL ${currentDrillIndex + 1}
        /
        ${currentSession.length}
      </small>

      <h2>
        ${drill.name}
      </h2>

    </div>


    <div class="training-screen">

      <div class="training-meta">

        ${drill.categories.map(
          category => `
            <span class="training-tag">
              ${category}
            </span>
          `
        ).join("")}

        <span class="training-tag">
          ${drill.difficulty}
        </span>

        <span class="training-tag">
          +${drill.xp} XP
        </span>

      </div>


      <!-- VIDEO -->

      ${
        drill.video
          ? `
            <video
              class="drill-video"
              controls
              playsinline
            >
              <source
                src="${drill.video}"
                type="video/mp4"
              >
              Your browser does not support video.
            </video>
          `
          : `
            <div class="drill-placeholder">

              <div>

                <div style="font-size:55px">
                  🎥
                </div>

                <h3>
                  Demonstration coming soon
                </h3>

                <p>
                  We will add the official Football Lab
                  demonstration video for this drill.
                </p>

              </div>

            </div>
          `
      }


      <!-- CONE DIAGRAM -->

      <h3>
        📍 Drill Setup
      </h3>

      <div class="drill-diagram">

        <div class="cone-field">

          <div class="drill-path"></div>

          <div class="cone cone-1"></div>
          <div class="cone cone-2"></div>
          <div class="cone cone-3"></div>
          <div class="cone cone-4"></div>
          <div class="cone cone-5"></div>

        </div>

      </div>


      <!-- DESCRIPTION -->

      <h3>
        How to do it
      </h3>

      <p style="color:var(--muted); margin:10px 0 25px;">
        ${drill.description}
      </p>


      <!-- EQUIPMENT -->

      <h3>
        Equipment
      </h3>

      <p style="color:var(--muted); margin:10px 0 25px;">
        ${drill.equipment.join(" • ")}
      </p>


      <!-- COACHING -->

      <h3>
        🧠 Coaching Point
      </h3>

      <p style="color:var(--muted); margin:10px 0 25px;">
        ${drill.coaching}
      </p>


      <!-- MISTAKES -->

      <h3>
        ⚠️ Common Mistakes
      </h3>

      <ul style="color:var(--muted); margin:10px 0 25px 20px;">

        ${drill.mistakes.map(
          mistake =>
            `<li>${mistake}</li>`
        ).join("")}

      </ul>


      <!-- TIMER -->

      <div class="timer">

        <div
          class="timer-value"
          id="timer"
        >
          ${formatTime(drill.duration)}
        </div>

        <button
          class="btn btn-primary"
          onclick="startTimer()"
        >
          ▶ Start Timer
        </button>

      </div>


      <button
        class="btn btn-outline"
        onclick="completeDrill()"
      >
        ✓ Complete Drill
      </button>

    </div>

  `;

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

  const drill =
    currentSession[currentDrillIndex];

  remainingSeconds =
    drill.duration;

  clearInterval(timerInterval);

  const timer =
    document.getElementById("timer");

  timer.textContent =
    formatTime(remainingSeconds);


  timerInterval =
    setInterval(() => {

      remainingSeconds--;

      const timer =
        document.getElementById("timer");

      if (timer) {

        timer.textContent =
          formatTime(remainingSeconds);

      }


      if (remainingSeconds <= 0) {

        clearInterval(timerInterval);

        alert(
          "⏱️ Time complete! Great work."
        );

      }

    },1000);

}


/* =========================================
   COMPLETE DRILL
========================================= */

function completeDrill() {

  clearInterval(timerInterval);

  const drill =
    currentSession[currentDrillIndex];


  if (
    typeof achievementSystem !== "undefined"
  ) {

    achievementSystem.addXP(
      drill.xp
    );

  }


  currentDrillIndex++;


  if (
    currentDrillIndex >=
    currentSession.length
  ) {

    completeSession();

    return;

  }


  startDrill();

}


/* =========================================
   COMPLETE SESSION
========================================= */

function completeSession() {

  if (
    typeof achievementSystem !== "undefined"
  ) {

    achievementSystem.addXP(50);

    achievementSystem.unlock(
      "first-session"
    );

  }


  const totalXP =
    typeof achievementSystem !== "undefined"
      ? achievementSystem.getXP()
      : 0;


  const screen =
    document.getElementById("trainingScreen");


  screen.innerHTML = `

    <div class="session-complete">

      <div style="font-size:80px">
        🏆
      </div>

      <small style="color:var(--accent)">
        SESSION COMPLETE
      </small>

      <h2>
        Excellent work.
      </h2>

      <div class="xp-earned">
        +50 XP
      </div>

      <p style="color:var(--muted)">
        Total XP:
        <strong>
          ${totalXP}
        </strong>
      </p>

      <br>

      <button
        class="btn btn-primary"
        onclick="showPositionSelection()"
      >
        Train Again
      </button>

      <button
        class="btn btn-outline"
        onclick="returnHome()"
      >
        Return Home
      </button>

    </div>

  `;

}


/* =========================================
   RETURN HOME
========================================= */

function returnHome() {

  clearInterval(timerInterval);

  document
    .getElementById("trainingApp")
    .classList.remove("active");

  document
    .getElementById("mainWebsite")
    .style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================
   TIME
========================================= */

function formatTime(seconds) {

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    seconds % 60;

  return (
    String(minutes).padStart(2,"0")
    +
    ":"
    +
    String(secs).padStart(2,"0")
  );

}
