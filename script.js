let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flipButton");
let resetButton = document.querySelector("#resetButton");

flipButton.addEventListener("click", () => {
  let result = Math.floor(Math.random() * 2);
  coin.style.animation = "none";

  if (result) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 2.5s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 2.5s forwards";
    }, 100);
    tails++;
  }

  setTimeout(updateStats, 2500);
  disableButton();
});

function updateStats() {
  document.querySelector("#headsCount").textContent = `Heads: ${heads}`;
  document.querySelector("#tailsCount").textContent = `Tails: ${tails}`;
}

function disableButton() {
  flipButton.disabled = true;
  setTimeout(function () {
    flipButton.disabled = false;
  }, 2500);
}

resetButton.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
