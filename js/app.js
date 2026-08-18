let playerProfile = {
  position: null,
  level: null,
  goal: null
};

let currentSession = [];
let currentDrillIndex = 0;
let timerInterval = null;
let remainingSeconds = 0;


/* -------------------------
   NAVIGATION
------------------------- */

function scrollToSection(id) {

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }

}


/* -------------------------
   TRAINING START
------------------------- */

function startTraining() {

  const app = document.getElementById(
    "trainingApp"
  );

  const home = document.getElementById(
    "mainWebsite"
  );

  if (!app || !home) {
    alert(
      "Training engine interface is being connected."
    );

    return;
  }

  home.style.display = "none";

  app.classList.add("active");

  showTrainingPositionSelection();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* -------------------------
   POSITION SELECTION
------------------------- */

function showTrainingPositionSelection() {

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>Step 1 of 4</small>

      <h2>What's your position?</h2>

      <p>
        Choose the position you want to develop.
      </p>

    </div>

    <div class="selection-grid">

      ${Object.entries(
        footballTraining.positions
      ).map(([key, position]) => `

        <div
          class="selection-card"
          onclick="selectPosition('${key}')"
        >

          <h3>${position.name}</h3>

          <p>
            ${position.focus.join(" • ")}
          </p>

        </div>

      `).join("")}

    </div>

  `;

}


/* -------------------------
   SELECT POSITION
------------------------- */

function selectPosition(position) {

  playerProfile.position = position;

  showLevelSelection();

}


/* -------------------------
   LEVEL
------------------------- */

function showLevelSelection() {

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>Step 2 of 4</small>

      <h2>What's your level?</h2>

      <p>
        Choose the level that best describes your
        current football ability.
      </p>

    </div>

    <div class="selection-grid">

      ${Object.entries(
        footballTraining.levels
      ).map(([key, level]) => `

        <div
          class="selection-card"
          onclick="selectLevel('${key}')"
        >

          <h3>${level.name}</h3>

          <p>
            ${
              key === "beginner"
                ? "Learning the fundamentals."
                : key === "intermediate"
                ? "Comfortable with the basics."
                : key === "advanced"
                ? "Strong technical and tactical ability."
                : "High-level competitive player."
            }
          </p>

        </div>

      `).join("")}

    </div>

  `;

}


/* -------------------------
   SELECT LEVEL
------------------------- */

function selectLevel(level) {

  playerProfile.level = level;

  showGoalSelection();

}


/* -------------------------
   GOAL
------------------------- */

function showGoalSelection() {

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>Step 3 of 4</small>

      <h2>What do you want to improve?</h2>

      <p>
        Choose your primary training goal.
      </p>

    </div>

    <div class="selection-grid">

      ${Object.entries(
        footballTraining.goals
      ).map(([key, goal]) => `

        <div
          class="selection-card"
          onclick="selectGoal('${key}')"
        >

          <h3>${goal}</h3>

          <p>
            Build your ability in ${goal.toLowerCase()}.
          </p>

        </div>

      `).join("")}

    </div>

  `;

}


/* -------------------------
   SELECT GOAL
------------------------- */

function selectGoal(goal) {

  playerProfile.goal = goal;

  generateProgram();

}


/* -------------------------
   PROGRAM GENERATOR
------------------------- */

function generateProgram() {

  const goal =
    footballTraining.goals[
      playerProfile.goal
    ];

  const level =
    footballTraining.levels[
      playerProfile.level
    ];

  const position =
    footballTraining.positions[
      playerProfile.position
    ];

  let drills =
    footballTraining.drills.filter(
      drill =>
        drill.category
          .toLowerCase()
          .includes(
            goal.toLowerCase().split(" ")[0]
          )
    );

  if (drills.length < 3) {

    drills =
      footballTraining.drills.slice(0, 4);

  }

  currentSession = drills.slice(0, 4);

  currentDrillIndex = 0;

  showProgram(
    position,
    level,
    goal
  );

}


/* -------------------------
   PROGRAM SCREEN
------------------------- */

function showProgram(
  position,
  level,
  goal
) {

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="section-heading">

      <small>Step 4 of 4</small>

      <h2>Your training program</h2>

      <p>
        Built for a
        <strong>${position.name}</strong>
        at
        <strong>${level.name}</strong>
        level.
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
          ${goal}
        </span>

      </div>

      <h3>
        Today's Session
      </h3>

      <p style="color:var(--muted)">
        ${currentSession.length}
        exercises selected for your session.
      </p>

      <div class="training-list">

        ${currentSession.map(
          (drill, index) => `

          <div class="training-item">

            <strong>
              ${index + 1}. ${drill.name}
            </strong>

            <span>
              ${drill.duration}s
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


/* -------------------------
   START DRILL
------------------------- */

function startDrill() {

  const drill =
    currentSession[currentDrillIndex];

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="training-screen">

      <small style="color:var(--accent)">
        DRILL ${currentDrillIndex + 1}
        /
        ${currentSession.length}
      </small>

      <h3>
        ${drill.name}
      </h3>

      <div class="training-meta">

        <span class="training-tag">
          ${drill.category}
        </span>

        <span class="training-tag">
          ${drill.difficulty}
        </span>

        <span class="training-tag">
          +${drill.xp} XP
        </span>

      </div>

      <p>
        ${drill.description}
      </p>

      <div class="drill-diagram">

        <div class="cone-field">

          <div class="drill-path"></div>

          <div class="cone cone-1"></div>
          <div class="cone cone-2"></div>
          <div class="cone cone-3"></div>
          <div class="cone cone-4"></div>

        </div>

      </div>

      <h4>
        Coaching Point
      </h4>

      <p style="color:var(--muted)">
        ${drill.coaching}
      </p>

      <div class="timer">

        <div class="timer-value" id="timer">
          ${formatTime(drill.duration)}
        </div>

        <button
          class="btn btn-primary"
          onclick="startTimer()"
        >
          Start Timer
        </button>

      </div>

      <button
        class="btn btn-outline"
        onclick="completeDrill()"
      >
        Complete Drill
      </button>

    </div>

  `;

}


/* -------------------------
   TIMER
------------------------- */

function startTimer() {

  const drill =
    currentSession[currentDrillIndex];

  remainingSeconds =
    drill.duration;

  clearInterval(timerInterval);

  timerInterval =
    setInterval(() => {

      remainingSeconds--;

      const timer =
        document.getElementById("timer");

      if (timer) {

        timer.textContent =
          formatTime(
            remainingSeconds
          );

      }

      if (remainingSeconds <= 0) {

        clearInterval(timerInterval);

        alert(
          "Time complete! Great work."
        );

      }

    }, 1000);

}


/* -------------------------
   COMPLETE DRILL
------------------------- */

function completeDrill() {

  clearInterval(timerInterval);

  const drill =
    currentSession[currentDrillIndex];

  achievementSystem.addXP(
    drill.xp
  );

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


/* -------------------------
   COMPLETE SESSION
------------------------- */

function completeSession() {

  achievementSystem.addXP(50);

  achievementSystem.unlock(
    "first-session"
  );

  const totalXP =
    achievementSystem.getXP();

  const screen =
    document.getElementById("trainingScreen");

  screen.innerHTML = `

    <div class="session-complete">

      <div style="font-size:70px">
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
        Your total XP:
        <strong>${totalXP}</strong>
      </p>

      <br>

      <button
        class="btn btn-primary"
        onclick="showTrainingPositionSelection()"
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


/* -------------------------
   RETURN HOME
------------------------- */

function returnHome() {

  const app =
    document.getElementById("trainingApp");

  const home =
    document.getElementById("mainWebsite");

  app.classList.remove("active");

  home.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* -------------------------
   TIME FORMAT
------------------------- */

function formatTime(seconds) {

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    seconds % 60;

  return (
    String(minutes).padStart(2, "0")
    +
    ":"
    +
    String(secs).padStart(2, "0")
  );

}
