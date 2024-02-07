const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("./src/tunes/a.wav");
let tecla1 = true;

const playTune = (key) => {
	audio.src = tecla1 ? `./src/tunes/${key}.wav` : `./src/tunes/${key}-.wav`;
	audio.play();

	const clickedKey = document.querySelector(`[data-key="${key}"]`);
	clickedKey.classList.add("active");
	setTimeout(() => {
		clickedKey.classList.remove("active");
	}, 150);
};

pianoKeys.forEach((key) => {
	key.addEventListener("click", () => playTune(key.dataset.key));
	mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
	if (mapedKeys.includes(e.key)) {
		playTune(e.key);
	}
	if (e.key === "1") {
		tecla1 = !tecla1;
		document.querySelector("#escala").textContent = tecla1 ? "Dó4" : "Dó3";
	}
});

const handleVolume = (e) => {
	audio.volume = e.target.value;
};

const showHideKeys = () => {
	pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);
