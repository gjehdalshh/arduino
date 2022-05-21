let time = 0
let octave = -1

let oc3 = document.querySelector('#oc3')
let oc4 = document.querySelector('#oc4')
let oc5 = document.querySelector('#oc5')
let oc6 = document.querySelector('#oc6')

let time10 = document.querySelector('#time10')
let time15 = document.querySelector('#time15')
let time20 = document.querySelector('#time20')

/* set octave */
function setDefaultOctave(value) {
	octave = value
	console.log(octave)

	oc3.style.backgroundColor = 'white'
	oc3.style.color = '#646464'
	oc4.style.backgroundColor = 'white'
	oc4.style.color = '#646464'
	oc5.style.backgroundColor = 'white'
	oc5.style.color = '#646464'
	oc6.style.backgroundColor = 'white'
	oc6.style.color = '#646464'


	if (value == 0) {
		oc3.style.backgroundColor = '#385723'
		oc3.style.color = 'white'
	} else if (value == 1) {
		oc4.style.backgroundColor = '#385723'
		oc4.style.color = 'white'
	} else if (value == 2) {
		oc5.style.backgroundColor = '#385723'
		oc5.style.color = 'white'
	} else if (value == 3) {
		oc6.style.backgroundColor = '#385723'
		oc6.style.color = 'white'
	}
}

/* set time */
function setDefaultTime(value) {
	time = value

	time10.style.backgroundColor = 'white'
	time10.style.color = '#646464'
	time15.style.backgroundColor = 'white'
	time15.style.color = '#646464'
	time20.style.backgroundColor = 'white'
	time20.style.color = '#646464'

	if (value == 10) {
		time10.style.backgroundColor = '#FF0000'
		time10.style.color = 'white'
		addScore = 3
	} else if (value == 15) {
		time15.style.backgroundColor = '#FFC000'
		time15.style.color = 'white'
		addScore = 2
	} else if (value == 20) {
		time20.style.backgroundColor = '#0070C0'
		time20.style.color = 'white'
		addScore = 1
	}
}

/* setting modal on/off */
window.onload = function() {

	document.querySelector('.modal_wrap').style.display = 'block'
	document.querySelector('.black_bg').style.display = 'block'

	function offClick() {
		document.querySelector('.modal_wrap').style.display = 'none'
		document.querySelector('.black_bg').style.display = 'none'
		startActualMode();
	}

	document.querySelector('.modal_close').addEventListener('click', offClick)
}