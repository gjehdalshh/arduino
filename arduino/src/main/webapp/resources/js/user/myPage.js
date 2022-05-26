let myProfile = document.querySelector('#myProfileCategory')
let actualModeRecord = document.querySelector('#actualModeRecordCategory')
let myPost = document.querySelector('#myPostCategory')
let myCmt = document.querySelector('#myCmtCategory')
let myScrap = document.querySelector('#myScrapCategory')

function moveHome() {
	location.href = `/main/home`
}

function categoryChange(target) {
	target.style.color = 'black'
	target.style.borderBottom = '3px solid #000000'
	target.style.paddingBottom = '5px'
	target.style.fontWeight = 'bold'
}

let urlToString = window.location.href
url = urlToString.substring(27, 60)
if(url == 'myInfo?') {
	categoryChange(myProfile)
} else if(url == 'actualModeList?') {
	categoryChange(actualModeRecord)
} else if(url == 'myBoardList?') {
	categoryChange(myPost)
} else if(url == 'myCmtList?') {
	categoryChange(myCmt)
} else if(url == 'myScrapList?') {
	categoryChange(myScrap)
}

let modifyName_bg = document.querySelector('.modifyName_bg')
let modifyName_wrap = document.querySelector('.modifyName_wrap')
let modifyPhone_bg = document.querySelector('.modifyPhone_bg')
let modifyPhone_wrap = document.querySelector('.modifyPhone_wrap')

function infoModofy(value) {
	if(value == 1) {
		modifyName_bg.style.display = 'block'
		modifyName_wrap.style.display = 'block'
	} else if(value == 2) {
		modifyPhone_bg.style.display = 'block'
		modifyPhone_wrap.style.display = 'block'
	}
}

function modifyNameCall() {
	modifyNameAjax()
}

function modifyNameAjax() {
	
	let currentName = document.querySelector('.currentName')
	let modifyName = document.querySelector('.modifyName')
	
	let param = {
			i_user: iUser.value,
			user_nm: currentName.value,
			modifyName: modifyName.value
	}
	console.log(param)
	fetch(`/user/modifyName`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(param)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result) {
				case 1:
					alert('이름이 변경되었습니다.')
					location.href = `/user/myInfo`
					break;
				case 2:
					alert('현재 이름을 다시 작성해주세요.')
					break;
			}
	})
}

function modifyPhoneCall() {
	modifyPhoneAjax()
}

function modifyPhoneAjax() {
	
	let currentPhone = document.querySelector('.currentPhone')
	let modifyPhone = document.querySelector('.modifyPhone')
	
	let param = {
			i_user: iUser.value,
			user_phone: currentPhone.value,
			modifyPhone: modifyPhone.value
	}
	console.log(param)
	fetch(`/user/modifyPhone`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(param)
	}).then(function(res){
		return res.json()
	}).then(function(data){
		switch(data.result) {
				case 1:
					alert('휴대폰 번호가 변경되었습니다.')
					location.href = `/user/myInfo`
					break;
				case 2:
					alert('현재 휴대폰 번호를 다시 작성해주세요..')
					break;
			}
	})
}


let lately = document.querySelector('.lately')
function sortBoardLately() {
	fetch(`/user/myLatelyBoardList`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
		}).then(function(res) {
			return res.json()
		}).then(function(myBoardList) {
			showBoardList(myBoardList)
		})
}

let popularity = document.querySelector('.popularity')
function sortBoardPopularity() {
	fetch(`/user/myPopularityBoardList`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
		}).then(function(res) {
			return res.json()
		}).then(function(myBoardList) {
			showBoardList(myBoardList)
		})
}

function showBoardList(myBoardList) {
	let j = 0
	let str = myBoardList[j].m_dt.substring(0, 10)
	sortBoard.innerHTML = ''
	myBoardList.forEach(function(i){
		sortBoard.innerHTML += `
		<div class="list_flex">
			<div class="postNumber">${j+1 }</div>
			<div class="postTitle">${myBoardList[j].board_title }</div>
			<div class="postCategory">${myBoardList[j].board_list_nm }</div>
			<div class="postDate">${str }</div>
		<div>
		`
		j++
	})
}
