
function moveJoin() {
	location.href = "/user/join"
}

function moveFindInfo(page) {
	location.href = "/user/findInfo?page="+page
}

function loginDesktop() {
	var id = document.querySelector('.user_id')
	var pw = document.querySelector('.user_pw')
	console.log(id.value)
	var param = {
		user_id: id.value,
		user_pw: pw.value
	}
	console.log(param)
	
	fetch(`/user/loginProc`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			switch(data.result) {
				case 1:
					alert('로그인이 성공하였습니다')
					location.href = `/main/home`
					break;
				case 2:
					alert('아이디가 존재하지 않습니다')
					break;
				case 3:
					alert('비밀번호가 일치하지 않습니다')
					break;
			}
		})
}

function loginMobile() {
	var id = document.querySelector('.user_id')
	var pw = document.querySelector('.user_pw')
	console.log(id.value)
	var param = {
		user_id: id.value,
		user_pw: pw.value
	}
	console.log(param)
	
	fetch(`/user/loginProc`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			switch(data.result) {
				case 1:
					alert('로그인이 성공하였습니다')
					location.href = `/user/myInfo`
					break;
				case 2:
					alert('아이디가 존재하지 않습니다')
					break;
				case 3:
					alert('비밀번호가 일치하지 않습니다')
					break;
			}
		})
}

function enterkey() {
	if(window.event.keyCode == 13) {
		login()
	}
}

