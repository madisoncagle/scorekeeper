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
let modal = document.getElementById("add-player-modal");
let btn = document.getElementById("add-player-btn");
let x = document.getElementsByClassName("close")[0];
let submit = document.getElementById("submit-player-name");

submit.addEventListener("click", () => {
    // get name from input
});

btn.addEventListener("click", () => {
    modal.style.display = "block";
});

x.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});