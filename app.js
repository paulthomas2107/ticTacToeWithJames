const boxes = Array.from(document.getElementsByClassName('box'));

const spaces = [null, null, null, null, null, null, null, null, null];

const O_TEXT = "O";
const X_TEXT = "X";

let currentPlayer = O_TEXT;

 
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        } 
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    })
}

const boxClicked = (e) => {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText =  currentPlayer;
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}

drawBoard();