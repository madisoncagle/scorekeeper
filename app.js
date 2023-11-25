let playerCards = document.getElementsByClassName("card");

//#region PLAYER AND SCORE CONTROL

for (let card of playerCards) {
    // bid control
    const minus = card.getElementsByClassName("minus")[0];
    const plus = card.getElementsByClassName("plus")[0];

    minus.addEventListener("click", () => {
        let bid = parseInt(card.getElementsByClassName("bid-number")[0].textContent);

        console.log(bid);

        if (bid > 0) {
            bid -= 1;
        }

        card.getElementsByClassName("bid-number")[0].textContent = bid;
    });

    plus.addEventListener("click", () => {
        let bid = parseInt(card.getElementsByClassName("bid-number")[0].textContent);

        bid += 1;

        card.getElementsByClassName("bid-number")[0].textContent = bid;

        console.log(bid);
    });

    // score control
    const no = card.getElementsByClassName("no")[0];
    const yes = card.getElementsByClassName("yes")[0];

    no.addEventListener("click", () => {
        // reset bid number
        card.getElementsByClassName("bid-number")[0].textContent = 0;
    });

    yes.addEventListener("click", () => {
        // add to score
        let bid = parseInt(card.getElementsByClassName("bid-number")[0].textContent);
        let score = parseInt(card.getElementsByClassName("score")[0].textContent);
        score += (10 + bid);

        card.getElementsByClassName("score")[0].textContent = score;

        // reset bid number
        card.getElementsByClassName("bid-number")[0].textContent = 0;
    });
}

//#endregion

//#region MODAL CONTROL

const modal = document.getElementById("add-player-modal");
const addPlayerBtn = document.getElementById("add-player-btn");
const x = document.getElementsByClassName("close")[0];
const submit = document.getElementById("submit-player-name");
const newPlayerName = document.getElementById("new-name");
const warning = document.getElementsByClassName("modal-warning")[0];
const nameInput = document.getElementById("new-name");

submit.addEventListener("click", () => {
    // get name from input
    console.log(newPlayerName.value);

    // if empty, warn
    if (newPlayerName.value == "") {
        warning.style.display = "block";
        console.log("no player name");
        return;
    }

    // else add player to scoreboard
    const scoreboard = document.getElementsByClassName("scoreboard")[0];
    scoreboard.innerHTML += generateCardHTML(newPlayerName.value);

    // add event listeners for buttons
    addListeners(newPlayerName.value)

    // clear input and close
    newPlayerName.value = "";
    modal.style.display = "none";
});

addPlayerBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

x.addEventListener("click", () => {
    modal.style.display = "none";
    warning.style.display = "none";
    newPlayerName.value = "";
});

nameInput.addEventListener("keyup", () => {
    if (newPlayerName.value == "") {
        warning.style.display = "block";
    }
    else {
        warning.style.display = "none";
    }
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        warning.style.display = "none";
        newPlayerName.value = "";
    }
});

//#endregion

//#region FUNCTIONS

function generateCardHTML(name) {
    return `<div class="card" id="${name.toLowerCase()}">

        <!-- player name -->
        <h3 class="player-name">${capitalized(name)}</h3>

        <!-- bid input -->
        <div class="bid-input">
            <button type="button" class="bid-button minus">-</button>
            <p class="bid-number">0</p>
            <button type="button" class="bid-button plus">+</button>
        </div>

        <!-- score -->
        <p class="numeric score">0</p>

        <!-- buttons -->
        <div class="buttons">
            <button type="button" class="no">nope</button>
            <button type="button" class="yes">got it</button>
        </div>

    </div>`
}

function capitalized(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function addListeners(playerName) {
    const card = document.getElementById(playerName.toLowerCase());

    // bid control
    const minus = card.getElementsByClassName("minus")[0];
    const plus = card.getElementsByClassName("plus")[0];

    minus.addEventListener("click", () => {
        let bid = parseInt(card.getElementsByClassName("bid-number")[0].textContent);

        console.log(bid);

        if (bid > 0) {
            bid -= 1;
        }

        card.getElementsByClassName("bid-number")[0].textContent = bid;

        console.log("minus clicked");
    });

    plus.addEventListener("click", () => {
        let bid = parseInt(card.getElementsByClassName("bid-number")[0].textContent);

        bid += 1;

        card.getElementsByClassName("bid-number")[0].textContent = bid;

        console.log(bid);

        console.log("plus clicked");
    });

    // score control
    const no = card.getElementsByClassName("no")[0];
    const yes = card.getElementsByClassName("yes")[0];

    no.addEventListener("click", () => {
        // reset bid number
        card.getElementsByClassName("bid-number")[0].textContent = 0;

        console.log("no clicked");
    });

    yes.addEventListener("click", () => {
        // add to score
        let bid = parseInt(card.getElementsByClassName("bid-number")[0].textContent);
        let score = parseInt(card.getElementsByClassName("score")[0].textContent);
        score += (10 + bid);

        card.getElementsByClassName("score")[0].textContent = score;

        // reset bid number
        card.getElementsByClassName("bid-number")[0].textContent = 0;

        console.log("yes clicked");
    });
}

//#endregion