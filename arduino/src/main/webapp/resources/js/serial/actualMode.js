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
let nameKor = document.querySelector('#real')

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
			printData(data.data)
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
function restart() {
		location.reload()
}


/* 실전모드가 종료되고 종료화면 모달창 open */
function endModalOpen() {
	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"
	document.querySelector('.endModal_wrap').style.display = 'block'
	document.querySelector('.endBlack_bg').style.display = 'block'
	currentScore.innerHTML = currScore+'점';
	
	document.querySelector('.endModal_home').addEventListener('click', moveHome)
	document.querySelector('.endModal_restart').addEventListener('click', restart)
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

function setDefaultOctave(value) {
	octave = value
	console.log(octave)

	oc3.style.backgroundColor = 'white'
	oc3.style.color = '#646464'
	oc4.style.backgroundColor = 'white'
	oc4.style.color = '#646464'
	oc5.style.backgroundColor = 'white'
	oc5.style.color = '#646464'
	oc6.style.backgroundColor = 'white'
	oc6.style.color = '#646464'
	

	if (value == 0) {
		oc3.style.backgroundColor = '#385723'
		oc3.style.color = 'white'
	} else if (value == 1) {
		oc4.style.backgroundColor = '#385723'
		oc4.style.color = 'white'
	} else if (value == 2) {
		oc5.style.backgroundColor = '#385723'
		oc5.style.color = 'white'
	} else if (value == 3) {
		oc6.style.backgroundColor = '#385723'
		oc6.style.color = 'white'
	}
}
function setDefaultTime(value) {
	time = value

	time10.style.backgroundColor = 'white'
	time10.style.color = '#646464'
	time15.style.backgroundColor = 'white'
	time15.style.color = '#646464'
	time20.style.backgroundColor = 'white'
	time20.style.color = '#646464'

	if (value == 10) {
		time10.style.backgroundColor = '#FF0000'
		time10.style.color = 'white'
		addScore = 1
	} else if (value == 15) {
		time15.style.backgroundColor = '#FFC000'
		time15.style.color = 'white'
		addScore = 2
	} else if (value == 20) {
		time20.style.backgroundColor = '#0070C0'
		time20.style.color = 'white'
		addScore = 3
	}
}



function printData(data) {
	console.log(data)

	if (data == 0) {
		nameKor.innerHTML = `X`
	}
	if (data % 12 == 1 || data % 12 == 2) {
		nameKor.innerHTML = `도`
	}
	if (data % 12 == 3 || data % 12 == 4) {
		nameKor.innerHTML = `레`
	}
	if (data % 12 == 5) {
		nameKor.innerHTML = `미`
	}
	if (data % 12 == 6 || data % 12 == 7) {
		nameKor.innerHTML = `파`
	}
	if (data % 12 == 8 || data % 12 == 9) {
		nameKor.innerHTML = `솔`
	}
	if (data % 12 == 10 || data % 12 == 11) {
		nameKor.innerHTML = `라`
	}
	if (data % 12 == 0) {
		nameKor.innerHTML = `시`
	}
	if (data %12 == 2 || data % 12 == 4 || data % 12 == 7 || data % 12 == 9 || data % 12 == 11) {
		nameKor.innerHTML += `#`
	}
}

