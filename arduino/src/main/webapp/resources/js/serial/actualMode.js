let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let defaultTime = document.querySelector('.defaultTime')
let countdown = document.querySelector('.countdown')
let count = defaultTime.value
let val = 0
let octave = -1
let randomMelody = new Array('도', '도#', '레', '레#', '미', '파', '파#', '솔', '솔#', '라', '라#','시');

function getOctaveValue(oc){
	octave = oc
	console.log(octave)
}

function runActualMode() {
	let melody = parseInt(Math.random()*12)
	console.log(melody)
	let value = randomMelody[melody]
	console.log(value)
	test.innerHTML = value;
}

function startActualMode() {
	if (val == 0) {
		timer.style = "animation-play-state: running"
		mask.style = "animation-play-state: running"

		myTimer()
		runActualMode()
		setTime()
		val = 1
	}
}

function myTimer() {

	countdown.innerHTML = `<div>${count}</div>`
	count = count - 1

	if (count == 0) {
		count = 5
	}
}

function setTime() {
	setInterval(myTimer, 1000)
	setInterval(runActualMode, 5000)
}

window.onload = function() {
	
	document.querySelector('.modal_wrap').style.display = 'block'
	document.querySelector('.black_bg').style.display = 'block'
	
	function offClick() {
		document.querySelector('.modal_wrap').style.display = 'none'
		document.querySelector('.black_bg').style.display = 'none'
		startActualMode();
	}

	document.querySelector('.modal_close').addEventListener('click', offClick)
}


