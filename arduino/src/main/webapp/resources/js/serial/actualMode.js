let timer = document.querySelector('.timer')
let mask = document.querySelector('.mask')
let countdown = document.querySelector('.countdown')
let sessionIUser = document.querySelector('#iUser')
let octave = -1
let randomMelody = new Array('도', '도#', '레', '레#', '미', '파', '파#', '솔', '솔#', '라', '라#', '시');
let melody = 0
let time = 0
let start
let modeControl
let quizCount = 0
let currScore = 0
let addScore = 0
let count = 0
let resetCount
let examCountList = document.querySelectorAll('.examCount')

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
			check(data.data)
			printData(data.data)
	})
}

let successAndFailCheck = 0

/* 랜덤으로 생성된 값과 입력한 값 비교 */
function check(data) {
	if (data == ((melody + 1) + 12 * octave)) {
		successAndFailCheck = 1
		console.log('정답입니다! +1')
		console.log('time ='+time)
		console.log('count ='+count)
		showExamCountSuccess()
		currScore += addScore
		count = time
		clearInterval(start)
		runActualMode()
		start = setInterval(runActualMode, time * 1000)
		startTimer(timer)
		startTimer(mask)
		clearInterval(resetCount)
		showCountDown()
		resetCount = setInterval(showCountDown, 1000)
		clearInterval(currentExamCount)
		showCurrentExamCount()
		currentExamCount = setInterval(showCurrentExamCount, time * 1000)
	} else {
		console.log('틀렸습니다ㅠㅠ -1')
		successAndFailCheck = 0
	}
}

function showCurrentExamCount() {
	examCountList[quizCount].style.border = '1px solid #000000'
}

function showExamCountSuccess() {
	examCountList[quizCount-1].style.backgroundColor = '#70AD47'
}
function showExamCountFail() {
	examCountList[quizCount-2].style.backgroundColor = '#C00000'
}

/* 타이머 작동 */
function startTimer(tar) {
	const target = tar
	target.classList.remove("effect")
	void target.offsetWidth
	target.classList.add("effect")
}

function moveHome() {
	location.href = '/main/home'
}
function restart() {
	location.reload()
}

function recordScoreAjax() {
	
	var param = {
		i_user: sessionIUser.value,
		actual_mode_score: currScore
	}
	console.log(param)
	
	fetch(`/serial/recordScore`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(param)
	}).then(function(res) {
		return res.json()
	}).then(function(data){
		if(data.value == 1) {
			console.log('점수등록성공')
		}
	})
}

let userName = document.querySelector('.userName')

function showRankAjax() {
	fetch(`/serial/showRank`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
	}).then(function(res){
		return res.json()
	}).then(function(data){
		showRank(data)
	})
}

let show = document.querySelector('.showRank')
	

function showRank(data) {
	let j = 0;
	let str = data[j].user_phone.substr(7, 11)
	data.forEach(function(i){
		show.innerHTML += `
			<div class="rankFlex">
				<div class="rankImg">
					<img alt="" src="/res/img/${j+1}.png">
				</div>
				<div class="userName">${data[j].user_nm}</div>
				<div class="userPhone">(${str})</div>
				<div>${data[j].actual_mode_score}점</div>
			</div>
		`
		j++
	})

}

function showMyBestScoreAjax() {
	let myBestScore = document.querySelector('.myBestScore')
	let param = {
		i_user: sessionIUser.value
	}
	fetch(`/serial/showMyBestScore`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}, 
		body:JSON.stringify(param)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		console.log(data)
		myBestScore.innerHTML += ': ' + data.data.actual_mode_score + '점'
	})
}

function showMyRankAjax() {
	fetch(`/serial/showMyRank`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}, 
	}).then(function(res){
		return res.json()
	}).then(function(data){
		console.log('a')
		console.log(data)
		console.log('a')
		myRank(data)
	})
}

function myRank(data) {
	let j = 0
	data.forEach(function(){
		if(sessionIUser.value == data[j].i_user && currScore == data[j].actual_mode_score) {
			currentScoreRank.innerHTML = data[j].my_rank + '등'
			return;
		}		
		j++
	})
}

let userPhone = document.querySelector('.userPhone')
let ph = document.querySelector('#userPh')

/* 실전모드가 종료되고 종료화면 모달창 open */
function endModalOpen() {
	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"
	clearInterval(modeControl)
	clearInterval(resetCount)
	document.querySelector('.endModal_wrap').style.display = 'block'
	document.querySelector('.endBlack_bg').style.display = 'block'
	let str = ph.value.substr(7, 11)
	userPhone.innerHTML = '(' + str + ')'
	currentScore.innerHTML = currScore + '점';
	recordScoreAjax()
	showRankAjax()
	showMyBestScoreAjax()
	showMyRankAjax()
	
	document.querySelector('.endModal_home').addEventListener('click', moveHome)
	document.querySelector('.endModal_restart').addEventListener('click', restart)
}


let currentExamCount

/* 실전모드 run, 랜덤난수 생성 */
function runActualMode() {
	if (quizCount < 5) {
		melody = parseInt(Math.random() * 12)
		//console.log((melody + 1) + 12 * octave)
		let value = randomMelody[melody]
		//console.log(value)
		createRandomValue.innerHTML = `<div class="whiteColorDiv"></div>${value}`;
		quizCount++
		console.log('quizCountValue : '+quizCount)
		if(quizCount > 1 && successAndFailCheck == 0) {
			showExamCountFail()	
		}
	} else {
		endModalOpen()
		clearInterval(start)
	}
}

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

function showCountDown() {
		if(count == 0) {
			count = time
		}
		countdown.innerHTML = `
		${count}
		`
		count--
}

function startActualMode() {
	startTimer(timer)
	startTimer(mask)
	document.documentElement.style.setProperty("--duration", time + "s")
	timer.style = "animation-play-state: running"
	mask.style = "animation-play-state: running"
	showCurrentExamCount()
	currentExamCount = setInterval(showCurrentExamCount, time * 1000)
	mode()
	modeControl = setInterval(mode, 2000)
	runActualMode()
	start = setInterval(runActualMode, time * 1000)
	showOctaveAndTime()
	count = time
	showCountDown()
	resetCount = setInterval(showCountDown, 1000)
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
		addScore = 3
	} else if (value == 15) {
		time15.style.backgroundColor = '#FFC000'
		time15.style.color = 'white'
		addScore = 2
	} else if (value == 20) {
		time20.style.backgroundColor = '#0070C0'
		time20.style.color = 'white'
		addScore = 1
	}
}

function printData(data) {
	console.log(data)

	if (data == 0) {
		nameKor.innerHTML = `X`
	}
	if (data % 12 == 1 || data % 12 == 2) {
		nameKor.innerHTML = `도<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 3 || data % 12 == 4) {
		nameKor.innerHTML = `레<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 5) {
		nameKor.innerHTML = `미<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 6 || data % 12 == 7) {
		nameKor.innerHTML = `파<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 8 || data % 12 == 9) {
		nameKor.innerHTML = `솔<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 10 || data % 12 == 11) {
		nameKor.innerHTML = `라<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 0) {
		nameKor.innerHTML = `시<div id="hexagon"><div class="curStagy">${quizCount}</div></div>`
	}
	if (data % 12 == 2 || data % 12 == 4 || data % 12 == 7 || data % 12 == 9 || data % 12 == 11) {
		nameKor.innerHTML += `#`
	}
}

