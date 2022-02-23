

var join_btn = document.querySelector('.join_btn')

join_btn.onclick = function() {
	var id = document.querySelector('.user_id')
	var pw = document.querySelector('.user_pw')
	var chkPw = document.querySelector('.user_chkPw')
	var name = document.querySelector('.user_name')
	var nick = document.querySelector('.user_nick')
	var phone = document.querySelector('.user_phone')

	var param = {
		user_id: id.value,
		user_pw: pw.value,
		user_chkPw: chkPw.value,
		user_nm: name.value,
		user_nick: nick.value,
		user_phone: phone.value
	}
	console.log(param)
	
	fetch(`/user/joinProc`, {
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
					alert('회원가입이 성공하였습니다')
					location.href = `/user/login`
					break;
				case 2:
					alert('아이디가 이미 존재합니다')
					break;
				case 3:
					alert('이메일 형식으로 작성해주세요')
					break;
				case 4:
					alert('비밀번호가 맞지 않습니다')
					break;
				case 5:
					alert('이름을 4글자 이하로 적어주세요')
					break;
				case 6:
					alert('이미 존재하는 별명입니다')
					break;
				case 7:
					alert('별명을 20글자 이하로 적어주세요')
					break;
				case 8:
					alert('전화번호 형식에 맞게 작성해주세요')
					break;
			}
		})
}


function moveHome() {
	location.href = `/user/login`
}




