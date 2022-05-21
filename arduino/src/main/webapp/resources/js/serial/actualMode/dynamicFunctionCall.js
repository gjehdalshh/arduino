let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let sessionIUser = document.querySelector('#iUser')
let countdown = document.querySelector('.countdown')
let randomMelody = new Array('도', '도#', '레', '레#', '미', '파', '파#', '솔', '솔#', '라', '라#', '시');
let melody = 0
let start
let modeControl
let quizCount = 0
let currScore = 0
let addScore = 0
let count = 0
let resetCount
let value
let examCountList = document.querySelectorAll('.examCount')

/* actualMode start */
function startActualMode() {
	startTimer()
	interval()
	intervalValue = setInterval(interval, time * 1000)
	intervalMode()
	intervalModeValue = setInterval(intervalMode, 2000)
	showOctaveAndTime()
}

function interval() {
	runActualMode()
}

function intervalMode() {
	mode()
}

/* 타이머 작동 */
function startTimer( ) {
	setTimer(timer)
	setTimer(mask)
	document.documentElement.style.setProperty("--duration", time + "s")
	timer.style = "animation-play-state: running"
	mask.style = "animation-play-state: running"
	count = time
	showCountDown()
	resetCount = setInterval(showCountDown, 1000)
}

/* 타이머 */
function setTimer(tar) {
	const target = tar
	target.classList.remove("effect")
	void target.offsetWidth
	target.classList.add("effect")
}

/* 실전모드 run, 랜덤난수 생성 */
let currentExamCount
function runActualMode() {
	if (quizCount < 6) {
		showCurrentExamCount()
		melody = parseInt(Math.random() * 12)
		value = randomMelody[melody]
		quizCount++
		createRandomValue.innerHTML = `${value}<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
		console.log('quizCountValue : '+quizCount)
		if(quizCount > 1 && successAndFailCheck == 0) {
			showExamCountFail()	
		} else if (quizCount > 1 && successAndFailCheck == 1) {
			showExamCountSuccess()
		}
	} else {
		quizCount++
		if(successAndFailCheck == 0) {
			showExamCountFail()
		} else if (successAndFailCheck == 1) {
			showExamCountSuccess()
		}
		endModalOpen()
	}
}

/* show */
function showCurrentExamCount() {
	examCountList[quizCount].style.border = '1px solid #000000'
}

function showExamCountSuccess() {
	examCountList[quizCount-2].style.backgroundColor = '#70AD47'
}
function showExamCountFail() {
	examCountList[quizCount-2].style.backgroundColor = '#C00000'
}

/* 난이도 표시 */
let showOctaveDiv = document.querySelector('.showOctaveDiv')
let showTimeDiv = document.querySelector('.showTimeDiv')
function showOctaveAndTime() {
	showOctaveDiv.innerHTML = "옥타브 " + (octave+3)
	if(time == 10) {
		showTimeDiv.innerHTML = "난이도 상"
	} else if(time == 15) {
		showTimeDiv.innerHTML = "난이도 중"
	} else if(time == 20) {
		showTimeDiv.innerHTML = "난이도 하"
	}
}

/* 타이머 countdown */
function showCountDown() {
		if(count == 0) {
			count = time
		}
		countdown.innerHTML = `
		${count}
		`
		count--
}

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
		check(data.data)
		printData(data.data)
	})
}

/* 랜덤으로 생성된 값과 입력한 값 비교 */
let successAndFailCheck = 0
function check(data) {
	if (data == ((melody + 1) + 12 * octave)) {
		successAndFailCheck = 1
		console.log('정답입니다! +1')
		currScore += addScore
		clearIntervalAll()
		interval()
		intervalMode()
		setTimer(timer)
		setTimer(mask)
		clearInterval(resetCount)
		count = time
		showCountDown()
		if(quizCount < 6) {
			resetCount = setInterval(showCountDown, 1000)
			intervalModeValue = setInterval(intervalMode, 2000)
			intervalValue = setInterval(interval, time * 1000)
		}
	} else {
		console.log('틀렸습니다ㅠㅠ -1')
		successAndFailCheck = 0
	}
}

function clearIntervalAll(){
	clearInterval(intervalValue)
	clearInterval(intervalModeValue)
}

/* printData */
function printData(data) {

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
	if (data % 12 == 2 || data % 12 == 4 || data % 12 == 7 || data % 12 == 9 || data % 12 == 11) {
		nameKor.innerHTML += `#`
	}
}