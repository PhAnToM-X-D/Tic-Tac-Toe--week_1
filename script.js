/*
below this is the working of the PLAY GAME! button
*/
const button_startGame = document.getElementById("bb");
const rmdiv = document.getElementById("rmdiv");
const reset = document.getElementById("reset");
const grid = document.getElementById("flexbox");

button_startGame.addEventListener("click", function () {
  button_startGame.style.backgroundColor = "#235e6b";
  setTimeout(function () {
    button_startGame.style.backgroundColor = "#3EA8C1";
  }, 50);
  button_startGame.style.opacity = 0;
  button_startGame.style.transition = "opacity 1s ease-in-out";
  setTimeout(function () {
    button_startGame.remove();
    rmdiv.classList.remove("divdivdiv");
    rmdiv.classList.add("blocker");
    grid.classList.remove("blocker");
    grid.classList.add("divdivdiv");
    grid.style.height = "65vh";
    document.getElementById("inst").classList.remove("blocker");
    document.getElementById("inst").classList.add("inst");
    reset.classList.remove("blocker");
    reset.classList.add("reset");
  }, 1000);
  grid.style.justifyContent = "space-around";
});

//counter variable initialization and inst btn selection
var count = -1;
const inst = document.getElementById("inst");
const redpeg = document.getElementById("redpeg");
const bluepeg = document.getElementById("bluepeg");

/*
Below this is the working of the player selection
*/
var bluesec = 0;
var redsec = 0;

if (count == -1) {
  const pegs = [redpeg, bluepeg];
  for (var i = 0; i < 2; i++) {
    pegs[i].addEventListener("click", function () {
      if (bluesec == 1 || redsec == 1){
        alert("You have already selected a starting player! Now please take turns");
      }
      else if (this == redpeg) {
        redpeg.style.filter = "drop-shadow(0 0 15px rgba(255, 0, 255, 0.8))";
        redsec = 1;
        count = 0;
      } else {
        bluepeg.style.filter = "drop-shadow(0 0 15px #3EDFF4)";
        count = 0;
        bluesec = 1;
      }
      inst.innerHTML =
        "Now, the highlighted player must click one of the cells to take turn.";
    });
  }
}

/*
Below this is the working of the tic tac toe grid
This will include players being selected for turns and then the code checking
if any player has won yet or not.
 */
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
for (var i = 0; i < 9; i++) {
  btns[i].addEventListener("click", function () {
    //This condition setup ensures proper chances to players
    if (redsec == 1) {
      if (this.innerHTML.trim() !== "") {
        return;
      } else if (count % 2 == 0) {
        this.innerHTML =
          '<img class ="img" src="rcirc-removebg-preview.png" alt="red-circle">';
        redpeg.style.filter = "";
        redpeg.classList.add("imgg");
        bluepeg.style.filter = "drop-shadow(0 0 15px #3EDFF4)";
        count++;
      } else if (count % 2 == 1) {
        this.innerHTML =
          '<img class = "img" src="bcross-removebg-preview.png" alt="blue-cross">';
        bluepeg.style.filter = "";
        bluepeg.classList.add("imgg");
        redpeg.style.filter = "drop-shadow(0 0 15px rgba(255, 0, 255, 0.8))";
        count++;
      }
    } else if (bluesec == 1) {
      if (this.innerHTML.trim() !== "") {
        return;
      } else if (count % 2 == 1) {
        this.innerHTML =
          '<img class ="img" src="rcirc-removebg-preview.png" alt="red-circle">';
        redpeg.style.filter = "";
        redpeg.classList.add("imgg");
        bluepeg.style.filter = "drop-shadow(0 0 15px #3EDFF4)";
        count++;
      } else if (count % 2 == 0) {
        this.innerHTML =
          '<img class = "img" src="bcross-removebg-preview.png" alt="blue-cross">';
        bluepeg.style.filter = "";
        bluepeg.classList.add("imgg");
        redpeg.style.filter = "drop-shadow(0 0 15px rgba(255, 0, 255, 0.8))";
        count++;
      }
    } else {
      alert("Select a peg who starts first!");
    }

    //This condition setups checks if anyone has won yet or not.
    setTimeout(function () {
      if (count >= 5) {
        const i1 = document.getElementById("1").innerHTML;
        const i2 = document.getElementById("2").innerHTML;
        const i3 = document.getElementById("3").innerHTML;
        const i4 = document.getElementById("4").innerHTML;
        const i5 = document.getElementById("5").innerHTML;
        const i6 = document.getElementById("6").innerHTML;
        const i7 = document.getElementById("7").innerHTML;
        const i8 = document.getElementById("8").innerHTML;
        const i9 = document.getElementById("9").innerHTML;
        const ii = [i1, i2, i3, i4, i5, i6, i7, i8, i9];

        const wins_possible = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        let wf = false;

        for (let pattern of wins_possible) {
          const [a, b, c] = pattern;
          const i1 = ii[a];
          const i2 = ii[b];
          const i3 = ii[c];
          if (i1.trim() !== "" && i1 === i2 && i2 === i3) {
            wf = true;
            btna = btns[a];
            btnb = btns[b];
            btnc = btns[c];

            btna.style.backgroundColor = "#5CD2D6";
            btnb.style.backgroundColor = "#5CD2D6";
            btnc.style.backgroundColor = "#5CD2D6";

            if (i1.includes("bcross-removebg-preview.png")) {
              alert("Blue wins!");
            } else if (i1.includes("rcirc-removebg-preview.png")) {
              alert("Red wins!");
            }
            break;
          }
        }
        if (!wf && count === 9) {
          alert("It's a draw!");
        }
      }
    }, 10);
  });
}

//Working of the reset button
const resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", function () {
  resetbtn.style.backgroundColor = "#235e6b";
  setTimeout(function () {
    resetbtn.style.backgroundColor = "#3EA8C1";
  }, 50);
  for (var j = 0; j < 9; j++) {
    btns[j].innerHTML = "";
    count = -1;
    redsec = 0;
    bluesec = 0;
    inst.innerHTML = "Click on one of the pegs to decide the starting player!";
    bluepeg.style.filter = "";
    redpeg.style.filter = "";
    btns[j].style.backgroundColor = "";
  }
});
