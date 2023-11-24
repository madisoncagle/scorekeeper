let playerCard = document.getElementById("madison");

// bid control
const minus = playerCard.querySelector(".minus");
const plus = playerCard.querySelector(".plus");

minus.addEventListener("click", () => {
    let bid = parseInt(playerCard.querySelector(".bid-number").textContent);

    console.log(bid);

    if (bid > 0) {
        bid -= 1;
    }

    playerCard.querySelector(".bid-number").textContent = bid;
});

plus.addEventListener("click", () => {
    let bid = parseInt(playerCard.querySelector(".bid-number").textContent);

    bid += 1;

    playerCard.querySelector(".bid-number").textContent = bid;

    console.log(bid);
});

// score control
const no = playerCard.querySelector(".no");
const yes = playerCard.querySelector(".yes");

no.addEventListener("click", () => {
    // reset bid number
    playerCard.querySelector(".bid-number").textContent = 0;
});

yes.addEventListener("click", () => {
    // add to score
    let bid = parseInt(playerCard.querySelector(".bid-number").textContent);
    let score = parseInt(playerCard.querySelector(".score").textContent);
    score += (10 + bid);

    playerCard.querySelector(".score").textContent = score;

    // reset bid number
    playerCard.querySelector(".bid-number").textContent = 0;
});