document.addEventListener("DOMContentLoaded", () => {
	// seleciona todos os squares (quadrados)
	let squares = document.querySelectorAll(".square");
	// varre o array de ssquare selecionado acima
	squares.forEach((square) => {
		square.addEventListener("click", handleClick);
	});
	let button=document.querySelector(".btn")
	button.addEventListener("click",reset )
});
function handleClick(event) {
	// acha o elemento que esta sofrendo o evento, pega o id e passa como posiçao

	let square = event.target;

	let position = square.id;
	if (handleMove(position)) {
		setTimeout(() => {
			alert("O Jogo acabou");
		}, 10);
	}
	updateSquare(position);
}
// faz uma atualização dos quadrados,varrendo eles com o foreach e os simbolos tbm
//
function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let symbol = board[position];
	square.innerHTML = `<div class ='${symbol}'></div>`;
}

function reset() {
	let squares = document.querySelectorAll(".square");

	squares.forEach((square)=>{
		let position = square.id
		symbol = board[position]
		if(symbol != '')
		{
			square.innerHTML = "";
		}
	
	})
	reset2()
}

