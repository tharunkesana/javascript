const words = ["react", "angular", "javascript", "bootstrap", "tailwind"];

// Hints
const hints = [
    "Javascript Framework",
    "Javascript Framework",
    "Javascript Library",
    "Styling Library", 
    "Styling Library"
];

// Initialise display word
let displayWord = "";
let displayHint = "";

function shuffle(str) {
    let strArray = Array.from(str);
    for (let i = strArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        // Swap letters
        [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
    }
    return strArray.join('');
}

function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (input.value.trim().toLowerCase() === displayWord.toLowerCase()) {
        output.innerHTML = "Result: Correct";
    } else { 
        output.innerHTML = "Result: Incorrect";
    }
}

function refresh() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index]; 
    displayHint = hints[index];
    scrambledWord = shuffle(displayWord);

    let scrambledWordElement = document.getElementById("scrambleWord");
    scrambledWordElement.innerText = scrambledWord.toUpperCase();

    let hintElement = document.getElementById('hint');
    hintElement.innerHTML = "<b>Hint :</b> " + displayHint;
                                                           
    document.getElementById("output").innerText = "Result :";
}

// Initialize the game
refresh();