let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let defaultTime = document.querySelector('.defaultTime')
let countdown = document.querySelector('.countdown')
let count = defaultTime.value
let interval = 0
let time = 0

function startActualMode() {
	document.documentElement.style.setProperty("--duration", time + "s")
	timer.style = "animation-play-state: running"
	mask.style = "animation-play-state: running"
}

function setting() {

	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"

	document.querySelector('.setModal_wrap').style.display = 'block'
	document.querySelector('.setBlack_bg').style.display = 'block'

	function moveHome() {
		location.href = `/main/home`
	}
	function restart() {
		document.querySelector('.setModal_wrap').style.display = 'none'
		document.querySelector('.setBlack_bg').style.display = 'none'
		timer.style = "animation-play-state: running"
		mask.style = "animation-play-state: running"
	}

	document.querySelector('.restart').addEventListener('click', restart)
	document.querySelector('.setModal_close').addEventListener('click', moveHome)
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

let oc3 = document.querySelector('#oc3')
let oc4 = document.querySelector('#oc4')
let oc5 = document.querySelector('#oc5')
let oc6 = document.querySelector('#oc6')

let time10 = document.querySelector('#time10')
let time15 = document.querySelector('#time15')
let time20 = document.querySelector('#time20')
let time25 = document.querySelector('#time25')

function setDefaultOctave(value) {
	oc3.style.backgroundColor = 'white'
	oc4.style.backgroundColor = 'white'
	oc5.style.backgroundColor = 'white'
	oc6.style.backgroundColor = 'white'

	if (value == 0) {
		oc3.style.backgroundColor = 'skyblue'
	} else if (value == 1) {
		oc4.style.backgroundColor = 'skyblue'
	} else if (value == 2) {
		oc5.style.backgroundColor = 'skyblue'
	} else if (value == 3) {
		oc6.style.backgroundColor = 'skyblue'
	}
}
function setDefaultTime(value) {
	time = value
	
	time10.style.backgroundColor = 'white'
	time15.style.backgroundColor = 'white'
	time20.style.backgroundColor = 'white'
	time25.style.backgroundColor = 'white'
	
	if (value == 10) {
		time10.style.backgroundColor = 'skyblue'
	} else if (value == 15) {
		time15.style.backgroundColor = 'skyblue'
	} else if (value == 20) {
		time20.style.backgroundColor = 'skyblue'
	} else if (value == 25) {
		time25.style.backgroundColor = 'skyblue'
	}
}


