let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let countdown = document.querySelector('.countdown')
let octave = -1
let randomMelody = new Array('도', '도#', '레', '레#', '미', '파', '파#', '솔', '솔#', '라', '라#', '시');
let melody = 0
let time = 0
let start
let quizCount = 0
let currScore = 0
let addScore = 0

/* 아두이노에서 실시간으로 받고 값 비교*/
function mode() {
	fetch(`/serial/actualMode`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

	}).then(function(res) {
		return res.json()
	}).then(function(data) {
		console.log(data.data)
		if (melody != 0) {
			check(data.data)
		}
	})
}

/* 랜덤으로 생성된 값과 입력한 값 비교 */
function check(data) {
	if (data == ((melody + 1) + 12 * octave)) {
		console.log('정답입니다! +1')
		currScore += addScore
		clearInterval(start)
		runActualMode()
		start = setInterval(runActualMode, time * 1000)
		startTimer(timer)
		startTimer(mask)
	} else {
		console.log('틀렸습니다ㅠㅠ -1')
	}
}

/* 타이머 작동 */
function startTimer(tar) {
	const target = tar
	target.classList.remove("effect")
	void target.offsetWidth
	target.classList.add("effect")
}

function moveHome(){
	location.href = '/main/home'
}

/*  */

/* 실전모드가 종료되고 종료화면 모달창 open */
function endModalOpen() {
	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"
	document.querySelector('.endModal_wrap').style.display = 'block'
	document.querySelector('.endBlack_bg').style.display = 'block'
	currentScore.innerHTML = currScore;
	
	document.querySelector('.endModal_close').addEventListener('click', moveHome)
}


/* 실전모드 run, 랜덤난수 생성 */
function runActualMode() {
	if (quizCount < 5) {
		melody = parseInt(Math.random() * 12)
		//console.log((melody + 1) + 12 * octave)
		let value = randomMelody[melody]
		//console.log(value)
		test.innerHTML = value;
		quizCount++
	} else {
		endModalOpen()
	}
}

function startActualMode() {
	startTimer(timer)
	startTimer(mask)
	document.documentElement.style.setProperty("--duration", time + "s")
	timer.style = "animation-play-state: running"
	mask.style = "animation-play-state: running"

	mode()
	setInterval(mode, 2000)
	runActualMode()
	start = setInterval(runActualMode, time * 1000)
}

function setting() {
	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"

	clearInterval(start)

	document.querySelector('.setModal_wrap').style.display = 'block'
	document.querySelector('.setBlack_bg').style.display = 'block'

	function restart() {
		location.reload()
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
	octave = value

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

	if (value == 10) {
		addScore = 1
		time10.style.backgroundColor = 'skyblue'
	} else if (value == 15) {
		addScore = 2
		time15.style.backgroundColor = 'skyblue'
	} else if (value == 20) {
		addScore = 3
		time20.style.backgroundColor = 'skyblue'
	} 
}
