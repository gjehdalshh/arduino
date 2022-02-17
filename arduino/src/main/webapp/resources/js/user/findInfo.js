let currentPage = document.querySelector('.currentPage')
let subTitileId = document.querySelector('.subTitileId')
let subTitilePw = document.querySelector('.subTitilePw')


if(currentPage.value == 1) {
	subTitileId.style.backgroundColor = '#d4f3ff'
} else if(currentPage.value == 2) {
	subTitilePw.style.backgroundColor = '#d4f3ff'
}

function findInfo() {
	let nm = document.querySelector('.user_nm')
	let ph = document.querySelector('.user_ph')
	
	var param = {
		user_nm: nm.value,
		user_phone: ph.value
	}
	
	console.log(param)
	
	fetch(`/user/findInfo`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			console.log(data.result)
			if(data.result.user_id == 'error') {
				alert('아이디가 존재하지 않습니다.')
			} else {
				findIdAjax(data.result)
			}
		})
}

let findId = document.getElementById('findId')
function findIdAjax(data) {
	findId.style.display = 'block'
	findId.innerHTML = `
		<div>${data.user_nm}님의 아이디는 ${data.user_id} 입니다.</div>
	`
}

function movePage(page) {
	location.href=`/user/findInfo?page=`+page
}

function moveHome() {
	location.href = `/user/login`
}

let findPw_btn = document.querySelector('.findPw_btn')
let pinCodeDiv = document.querySelector('.pinCodeDiv')
let chkPwDiv = document.querySelector('.chkPwDiv')
let pwDiv = document.querySelector('.pwDiv')
let sub_div = document.querySelector('.sub_div')

chkPwDiv.style.display = 'none'

findPw_btn.onclick = function() {
	pinCodeDiv.style.display = 'block'
}

function chkPw() {
	pwDiv.style.display = 'none'
	pinCodeDiv.style.display = 'none'
	pinCodeDiv.style.display = 'none'
	chkPwDiv.style.display = 'block'
}

function changePw() {
	alert('변경완료')
}


