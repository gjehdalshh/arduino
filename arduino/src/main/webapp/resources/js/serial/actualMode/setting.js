function setting() {
	timer.style = "animation-play-state: paused"
	mask.style = "animation-play-state: paused"


	clearInterval(intervalValue)
	clearInterval(intervalModeValue)
	clearInterval(resetCount)

	document.querySelector('.setModal_wrap').style.display = 'block'
	document.querySelector('.setBlack_bg').style.display = 'block'

	document.querySelector('.restart').addEventListener('click', restart)
	document.querySelector('.setModal_close').addEventListener('click', moveHome)
}