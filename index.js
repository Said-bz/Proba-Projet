const buttons = document.querySelectorAll(".div-button>button");
const Nbr = document.querySelector("#nbrlancer");
const Display = document.querySelector(".stats");

function toggleActive(selectedButton) {

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
}

function lancerDe() {
  const N = Nbr.value;
  Display.innerHTML = "";
  Nbr.value = "";
  let V;
  let isSelected = false;
  buttons.forEach((b) => {
    if (b.classList.contains("active") && !isSelected) {
      V = b.innerHTML;
      b.classList.remove("active");
      isSelected = true;
    }
  });

  if (N <= 0 || !isSelected) {
    Display.innerHTML = "Invalid Value";
  } else {
    let occ = 0;

    for (let i = 1; i <= N; i++) {
      let R = Math.floor(Math.random() * 6 + 1);
      if (R == V) {
        occ++;
      }
    }

    let diff = occ / N - 1 / 6;
    Display.innerHTML = `Nombre de lancer effectué : ${N} <br>Nombre Choisi : ${V}<br>`;
    Display.innerHTML += `Nombre d'apparition : ${occ} <br>Fréquence d'apparition : ${(
      occ / N
    ).toFixed(2)}<br>`;
    Display.innerHTML += `Différence avec la fréquence théorique : ${Math.abs(
      diff
    ).toFixed(5)}`;
  }
}
