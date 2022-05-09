let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let defaultTime = document.querySelector('.defaultTime')
let countdown = document.querySelector('.countdown')
let count = defaultTime.value
let val = 0

function test() {
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

	if (count == 0) {
		count = 5
	}
}

function setTime() {
	setInterval(myTimer, 1000)
}