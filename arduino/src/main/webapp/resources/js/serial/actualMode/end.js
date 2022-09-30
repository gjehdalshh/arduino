/* 실전모드가 종료되고 종료화면 모달창 open */
function endModalOpen() {
	end()
	document.querySelector('.endModal_wrap').style.display = 'block'
	document.querySelector('.endBlack_bg').style.display = 'block'
	showRankingdisplay()
}

/* show ranking display */
let userPhone = document.querySelector('.userPhone')
function showRankingdisplay() {
	let str = userPh.value.substr(7, 11)
	userPhone.innerHTML = '(' + str + ')'
	currentScore.innerHTML = currScore + '점'
	recordScoreAjax()
	showRankAjax()
	showMyBestScoreAjax()
	showMyRankAjax()
}

/* dynamicFunctionCall 종료 */
function end() {
	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"
	clearInterval(intervalModeValue)
	clearInterval(intervalValue)
	clearInterval(resetCount)
}

/* recordMyCurrentScore ajax call */
function recordScoreAjax() {
	recordDataBeforeChanging()
	var param = {
		i_user: sessionIUser.value,
		actual_mode_score: currScore,
		octave: octave + 3,
		level: level
	}
	
	fetch(`/serial/recordScore`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(param)
	}).then(function(res) {
		return res.json()
	}).then(function(data){
		checkRecordDataAfterChanging()
	})
}

/* show totalRank,  ajax call */
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

/* show totalRank */
let show = document.querySelector('.showRank')
function showRank(data) {
	let j = 0
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
/* show myBestScore ajax call */
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
		myBestScore.innerHTML += ': ' + data.data.actual_mode_score + '점'
	})
}

/* show myCurrentRank ajax call */
function showMyRankAjax() {
	fetch(`/serial/showMyRank`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}, 
	}).then(function(res){
		return res.json()
	}).then(function(data){
		myRank(data)
	})
}

/* show myCurrentRank */
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

function moveHome() {
	location.href = '/main/home'
}
function restart() {
	location.reload()
}