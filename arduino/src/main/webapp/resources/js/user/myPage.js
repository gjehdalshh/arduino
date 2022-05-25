let myProfile = document.querySelector('#myProfileCategory')
let actualModeRecord = document.querySelector('#actualModeRecordCategory')
let myPost = document.querySelector('#myPostCategory')
let myCmt = document.querySelector('#myCmtCategory')
let myScrap = document.querySelector('#myScrapCategory')

function moveHome() {
	location.href=`/main/home`
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
