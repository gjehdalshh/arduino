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
