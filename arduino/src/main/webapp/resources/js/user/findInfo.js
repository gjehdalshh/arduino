let currentPage = document.querySelector('.currentPage')
let subTitileId = document.querySelector('.subTitileId')
let subTitilePw = document.querySelector('.subTitilePw')

if(currentPage.value == 1) {
	subTitileId.style.backgroundColor = '#d4f3ff'
} else if(currentPage.value == 2) {
	subTitilePw.style.backgroundColor = '#d4f3ff'
}

/* ------------------- 아이디 찾기 ------------------  */

function findId() {
	let nm = document.querySelector('.user_nm')
	let ph = document.querySelector('.user_ph')

	var param = {
		user_nm: nm.value,
		user_phone: ph.value
	}
	
	console.log(param)
	
	fetch(`/user/findId`, {
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

let findUserId = document.getElementById('findId')
function findIdAjax(data) {
	findUserId.style.display = 'block'
	findUserId.innerHTML = `
		<div>${data.user_nm}님의 아이디는 ${data.user_id} 입니다.</div>
	`
}

/* -------------------------- 비밀번호 찾기 --------------------------- */

let pinCode;
let userNumber;

function findPw() {
	let nm = document.querySelector('.user_nm')
	let ph = document.querySelector('.user_ph')
	let id = document.querySelector('.user_id')
		
	var param = {
		user_nm: nm.value,
		user_phone: ph.value,
		user_id : id.value
	}
	
	console.log(param)
	
	fetch(`/user/findPw`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			if(data.result == 'error') {
				alert('아이디가 존재하지 않습니다.')
			} else {
				pinCodeDiv.style.display = 'block'
				pinCode = data.pinCode
				userNumber = data.result.i_user
			}
		})
}

/* -------------------- 보안코드 비교하기 ---------------------- */

let pinCodeDiv = document.querySelector('.pinCodeDiv')
let chkPwDiv = document.querySelector('.chkPwDiv')
let pwDiv = document.querySelector('.pwDiv')
let sub_div = document.querySelector('.sub_div')

chkPwDiv.style.display = 'none'

function comparePincode() {
	
	let inputPinCode = document.querySelector('.inputPinCode')
	console.log(pinCode)
	if(inputPinCode.value == pinCode) {
		pwDiv.style.display = 'none'
		pinCodeDiv.style.display = 'none'
		chkPwDiv.style.display = 'block'
	} else {
		alert('보안코드가 일치하지 않습니다. 다시 입력해주세요.')
	}
}

/* ------------------------- 비밀번호 변경 -------------------------- */

function changePw() {
	
	let newPw = document.querySelector('.userNewPw')
	let newChkPw = document.querySelector('.userNewChkPw')
	
	if (newPw.value == newChkPw.value){
		
		let param = {
			newPw : newPw.value,
			i_user : userNumber
		}
		
		fetch(`/user/changePw`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			alert('비밀번호가 변경되었습니다.')
			location.href = `/user/login`
		})
	} else {
		alert('비밀번호가 맞지 않습니다. 다시 확인해주세요')
	}
}
	

function movePage(page) {
	location.href=`/user/findInfo?page=`+page
}

function moveHome() {
	location.href = `/user/login`
}




