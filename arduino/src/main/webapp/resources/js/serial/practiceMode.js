let nameKor = document.getElementById('nameKor')
let nameEng = document.getElementById('nameEng')

function mode() {
	fetch(`/serial/practiceMode`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

	}).then(function(res) {
		return res.json()
	}).then(function(data) {
		console.log(data.data)
		test(data.data)
	})
}
setInterval(mode, 2000)

let C = document.querySelector('.C')
let D = document.querySelector('.D')
let E = document.querySelector('.E')
let F = document.querySelector('.F')
let G = document.querySelector('.G')
let A = document.querySelector('.A')
let B = document.querySelector('.B')
let P = document.querySelector('.P')
let one = document.querySelector('.one')
let two = document.querySelector('.two')


function test(data) {
	console.log(data)
	
	C.style.backgroundColor = 'white';
	D.style.backgroundColor = 'white';
	E.style.backgroundColor = 'white';
	F.style.backgroundColor = 'white';
	G.style.backgroundColor = 'white';
	A.style.backgroundColor = 'white';
	B.style.backgroundColor = 'white';
	P.style.backgroundColor = 'white';
	one.style.backgroundColor = 'white';
	two.style.backgroundColor = 'white';

	if (data == 0) {
		nameKor.innerHTML = `X`
	}
	if (data % 12 == 1 || data % 12 == 2) {
		C.style.backgroundColor = 'red';
		nameKor.innerHTML = `도`
		nameEng.innerHTML = `C`
	}
	if (data % 12 == 3 || data % 12 == 4) {
		D.style.backgroundColor = 'red';
		nameKor.innerHTML = `레`
		nameEng.innerHTML = `D`
	}
	if (data % 12 == 5) {
		E.style.backgroundColor = 'red';
		nameKor.innerHTML = `미`
		nameEng.innerHTML = `E`
	}
	if (data % 12 == 6 || data % 12 == 7) {
		F.style.backgroundColor = 'red';
		nameKor.innerHTML = `파`
		nameEng.innerHTML = `F`
	}
	if (data % 12 == 8 || data % 12 == 9) {
		G.style.backgroundColor = 'red';
		nameKor.innerHTML = `솔`
		nameEng.innerHTML = `G`
	}
	if (data % 12 == 10 || data % 12 == 11) {
		A.style.backgroundColor = 'red';
		nameKor.innerHTML = `라`
		nameEng.innerHTML = `A`
	}
	if (data % 12 == 0) {
		B.style.backgroundColor = 'red';
		nameKor.innerHTML = `시`
		nameEng.innerHTML = `B`
	}
	if (data > 0 && data < 13) {
		nameEng.innerHTML += `3`
	}
	if (data > 12 && data < 25) {
		two.style.backgroundColor = 'red';
		nameEng.innerHTML += `4`
	}
	if (data > 24 && data < 37) {
		one.style.backgroundColor = 'red';
		nameEng.innerHTML += `5`
	}
	if (data > 36 && data < 49) {
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameEng.innerHTML += `6`
	}
	if (data %12 == 2 || data % 12 == 4 || data % 12 == 7 || data % 12 == 9 || data % 12 == 11) {
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML += `#`
		nameEng.innerHTML += `#`
	}
}






