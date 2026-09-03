// Note to self, this format is JavaScript
// Outputs are "console.log()" and not "print()" for some reason.
// KEEP THAT IN MIND, FUTURE ELLISCECIE

// about.js

var welcomeSubtitle = document.getElementById("welcome-sub");

document.addEventListener('DOMContentLoaded', () => {
    fetch("./WelcomeQuotes.json")
        .then(response => response.json())
        .then(data => {
            var chosenData = false

            if (!chosenData) {
                var chosenSubtitle = (data[Math.floor(Math.random() * data.length)])

                console.log(chosenSubtitle)
                console.log(welcomeSubtitle.textContent)

                welcomeSubtitle.textContent = chosenSubtitle

                chosenData = true
                return chosenData;
            } else {
                // pass
            }
        })
        .catch(error => console.error("Error loading welcome quotes:", error));
});
