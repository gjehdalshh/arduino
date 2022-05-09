let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let defaultTime = document.querySelector('.defaultTime')
let countdown = document.querySelector('.countdown')
let count = defaultTime.value
let val = 0
let interval = 0

function startActualMode() {
	if (val == 0) {
		timer.style = "animation-play-state: running"
		mask.style = "animation-play-state: running"

		myTimer()
		setTime()
		val = 1
	}
}

function myTimer() {

	countdown.innerHTML = `<div>${count}</div>`
	count = count - 1
	timer.style = "animation-play-state: running"
	mask.style = "animation-play-state: running"

	if (count == 0) {
		count = 5
	}
}

function setTime() {
	interval = setInterval(myTimer, 1000)
	console.log(interval)
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

function setting() {
	clearInterval(interval)

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
		interval = setInterval(myTimer, 1000)
	}

	document.querySelector('.restart').addEventListener('click', restart)
	document.querySelector('.setModal_close').addEventListener('click', moveHome)
}

let oc3 = document.querySelector('#oc3')
let oc4 = document.querySelector('#oc4')
let oc5 = document.querySelector('#oc5')
let oc6 = document.querySelector('#oc6')

function getOctaveValue(value) {
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



