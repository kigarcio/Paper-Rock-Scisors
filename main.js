const btnPaper = document.querySelector(".paper");
const btnRock = document.querySelector(".rock");
const btnScisors = document.querySelector(".scisors");
const btnReset = document.querySelector(".reset");
const boxGame = document.querySelector(".box__game--icon");
const pInfo = document.querySelector(".text");
let random = Math.floor(Math.random() * 3);
const computerAnswer = () => {
	if (random === 0) {
		const paperIco = document.createElement("i");
		paperIco.classList.add("fa-regular");
		paperIco.classList.add("fa-hand");
		boxGame.append(paperIco);
	} else if (random === 1) {
		const rockIco = document.createElement("i");
		rockIco.classList.add("fa-regular");
		rockIco.classList.add("fa-hand-back-fist");
		boxGame.append(rockIco);
	} else {
		const scisorsIco = document.createElement("i");
		scisorsIco.classList.add("fa-regular");
		scisorsIco.classList.add("fa-hand-scissors");
		boxGame.append(scisorsIco);
	}
};

const clickPaper = () => {
	computerAnswer();
	if (random === 0) {
		pInfo.textContent = "Remis!";
		btnPaper.classList.toggle("remis");
	} else if (random === 1) {
		pInfo.textContent = "Wygrana!";
		btnPaper.classList.toggle("win");
	} else {
		pInfo.textContent = "Przegrana!";
		btnPaper.classList.toggle("lose");
	}
    disableButtons()
};

const clickRock = () => {
	computerAnswer();
	if (random === 0) {
		pInfo.textContent = "Przegrana!";
		btnRock.classList.toggle("lose");
	} else if (random === 1) {
		pInfo.textContent = "Remis!";
		btnRock.classList.toggle("remis");
	} else {
		pInfo.textContent = "Wygrana!";
		btnRock.classList.toggle("win");
	}
    disableButtons()
};
const clickScisors = () => {
	computerAnswer();
	if (random === 0) {
		pInfo.textContent = "Wygrana!";
		btnScisors.classList.toggle("win");
	} else if (random === 1) {
		pInfo.textContent = "Przegrana!";
		btnScisors.classList.toggle("lose");
	} else {
		pInfo.textContent = "Remis!";
		btnScisors.classList.toggle("remis");
	}
    disableButtons()
};
const disableButtons = () => {
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScisors.disabled = true;
};

function refreshPage() {
	window.location.reload();
}
btnPaper.addEventListener("click", clickPaper, { once: true });
btnRock.addEventListener("click", clickRock, { once: true });
btnScisors.addEventListener("click", clickScisors, { once: true });
btnReset.addEventListener("click", refreshPage, { once: true });
