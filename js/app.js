/* =========================================
   THE FOOTBALL LAB APP
========================================= */


function showMessage(message) {

  alert(message);

}


function scrollToSection(id) {

  const section =
    document.getElementById(id);

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =========================================
   APP INITIALIZATION
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log(
      "⚽ The Football Lab loaded successfully."
    );

  }
);
