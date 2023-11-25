let playerCards = document.querySelectorAll(".card");

// add event listeners for each player card
for (let card of playerCards) {
    // bid control
    const minus = card.querySelector(".minus");
    const plus = card.querySelector(".plus");

    minus.addEventListener("click", () => {
        let bid = parseInt(card.querySelector(".bid-number").textContent);

        console.log(bid);

        if (bid > 0) {
            bid -= 1;
        }

        card.querySelector(".bid-number").textContent = bid;
    });

    plus.addEventListener("click", () => {
        let bid = parseInt(card.querySelector(".bid-number").textContent);

        bid += 1;

        card.querySelector(".bid-number").textContent = bid;

        console.log(bid);
    });

    // score control
    const no = card.querySelector(".no");
    const yes = card.querySelector(".yes");

    no.addEventListener("click", () => {
        // reset bid number
        card.querySelector(".bid-number").textContent = 0;
    });

    yes.addEventListener("click", () => {
        // add to score
        let bid = parseInt(card.querySelector(".bid-number").textContent);
        let score = parseInt(card.querySelector(".score").textContent);
        score += (10 + bid);

        card.querySelector(".score").textContent = score;

        // reset bid number
        card.querySelector(".bid-number").textContent = 0;
    });
}

// modal control
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

    if (newPlayerName.value == "") {
        warning.style.display = "block";
        console.log("no player name");
    }

    newPlayerName.value = "";
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