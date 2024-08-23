let buttons = document.querySelectorAll(".btn1");
const resetButton = document.getElementById("reset-button");
let playerx = true;
let winplayer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (playerx) {
            button.innerText = "X";
            playerx = false;
        }
        else {
            button.innerText = "O";
            playerx = true;
        }
        button.disabled = true;
        checkwinner();
    });
});

const disable = (winner) => {
    for (let btn1 of buttons) {
        btn1.disabled = true;
    }
}
const resetGame = () => {
    buttons.forEach(button => {
        button.innerText = "";
        button.disabled = false; // Re-enable buttons if they were disabled
    });

    // Clear the winner display
    winner.innerText = "";

    // Reset the player turn
    playerx = true;
};
resetButton.addEventListener('click', resetGame);
const checkwinner = () => {
    for (let player of winplayer) {
        let pass0 = buttons[player[0]].innerText;
        let pass1 = buttons[player[1]].innerText;
        let pass2 = buttons[player[2]].innerText;
        if (pass0 != "" && pass1 != "" && pass2 != "") {
            if (pass0 === pass1 && pass1 === pass2) {
                console.log("winner", pass0);
                disable();
                document.getElementById("winner").innerText = `Winner: ${pass0}`;
                return;
            }
        }
       
    }
};