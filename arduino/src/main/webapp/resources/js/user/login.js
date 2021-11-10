
function moveJoin() {
	location.href = "/user/join"
}

var login_btn = document.querySelector('.login_btn')

login_btn.onclick = function() {
	var id = document.querySelector('.user_id')
	var pw = document.querySelector('.user_pw')
	console.log(id.value)
	var param = {
		user_id: id.value,
		user_pw: pw.value
	}
	{"user_id: id.value", "user_pw : "}
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
					break;
				case 2:
					alert('아이디가 존재하지 않습니다')
					break;
			}
		})
}



