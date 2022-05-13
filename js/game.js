//

let board = ["", "", "", "", "", "", "", "", ""];
let playerTimer = 0;
let symbols = ["o", "x"];
let gameOver = false;
let player = document.querySelector(".jogador");
// todos os estados de vitória
let winState = [
	//cada posição desses arrays indica uma no board
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
function turn (){
	player.innerHTML= `${playerTimer + 1}`
if (playerTimer==0) {
	player.style.color= "red"
} else {
	player.style.color = "blue";
}
}
turn()
function handleMove(position) {
	if (gameOver) {
		return;
	}
	if (board[position] == "") {
		board[position] = symbols[playerTimer];
		gameOver = isWin();

		// sele{ciona a posiçao que foi passada do boar e coloca o simbolo do jogado da vez
		if (gameOver == false) {
			board[position] = symbols[playerTimer];

			if (playerTimer == 0) {
				playerTimer =( playerTimer == 0 )? 1 : 0;
				playerTimer = 1;
				turn()
			} else {
				playerTimer = 0;
				turn()
			}
		}
	}
	return gameOver;
}
// verifica se ha um vencedor
function isWin() {
	for (let i = 0; i < winState.length; i++) {
		// let i representa o index
		let seq = winState[i];

		let pos1 = seq[0];
		let pos2 = seq[1];
		let pos3 = seq[2];
	
		if (
			board[pos1] == board[pos2] &&
			board[pos1] == board[pos3] &&
			board[pos1] != ''
		) {
			return true;
		}
	}
	return false;
}
let reset2 = ()=>{ board = ["", "", "", "", "", "", "", "", ""];
gameOver = false;
}

