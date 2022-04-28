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
		test(data.data)
	})
}
setInterval(mode, 500)

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
	
	if(data == 0) {
		nameKor.innerHTML = `<divX</div>`
	}
	if (data == 1) {
		C.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도</div>`
		nameEng.innerHTML = `<div>C3</div>`
	}
	if (data == 2) {
		C.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML = `<div>도#</div>`
		nameEng.innerHTML = `<div>C3#</div>`
	}
	if (data == 3) {
		D.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레</div>`
		nameEng.innerHTML = `<div>D3</div>`
	}
	if (data == 4) {
		D.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML = `<div>레#</div>`
		nameEng.innerHTML = `<div>D3#</div>`
	}
	if (data == 5) {
		E.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML = `<div>미</div>`
		nameEng.innerHTML = `<div>E3</div>`
	}
	if (data == 6) {
		F.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파</div>`
		nameEng.innerHTML = `<div>F3</div>`
	}
	if (data == 7) {
		F.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML = `<div>파#</div>`
		nameEng.innerHTML = `<div>F3#</div>`
	}
	if (data == 8) {
		G.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔</div>`
		nameEng.innerHTML = `<div>G3</div>`
	}
	if (data == 9) {
		G.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML = `<div>솔#</div>`
		nameEng.innerHTML = `<div>G3#</div>`
	}
	if (data == 10) {
		A.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라</div>`
		nameEng.innerHTML = `<div>A3</div>`
	}
	if (data == 11) {
		A.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		nameKor.innerHTML = `<div>라#</div>`
		nameEng.innerHTML = `<div>A3#</div>`
	}
	if (data == 12) {
		B.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>시</div>`
		nameEng.innerHTML = `<div>B3</div>`
	}
	if (data == 13) {
		C.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도</div>`
		nameEng.innerHTML = `<div>C4</div>`
	}
	if (data == 14) {
		C.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도</div>`
		nameEng.innerHTML = `<div>C4#</div>`
	}
	if (data == 15) {
		D.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레</div>`
		nameEng.innerHTML = `<div>D4</div>`
	}
	if (data == 16) {
		D.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레#</div>`
		nameEng.innerHTML = `<div>D4#</div>`
	}
	if (data == 17) {
		E.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>미</div>`
		nameEng.innerHTML = `<div>E4</div>`
	}
	if (data == 18) {
		F.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파</div>`
		nameEng.innerHTML = `<div>F4</div>`
	}
	if (data == 19) {
		F.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파#</div>`
		nameEng.innerHTML = `<div>F4#</div>`
	}
	if (data == 20) {
		G.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔</div>`
		nameEng.innerHTML = `<div>G4</div>`
	}
	if (data == 21) {
		G.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔#</div>`
		nameEng.innerHTML = `<div>G4#</div>`
	}
	if (data == 22) {
		A.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라</div>`
		nameEng.innerHTML = `<div>A4</div>`
	}
	if (data == 23) {
		A.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라#</div>`
		nameEng.innerHTML = `<div>A4#</div>`
	}
	if (data == 24) {
		B.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>시</div>`
		nameEng.innerHTML = `<div>B4</div>`
	}
	if (data == 25) {
		C.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도</div>`
		nameEng.innerHTML = `<div>C5</div>`
	}
	if (data == 26) {
		C.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도#</div>`
		nameEng.innerHTML = `<div>C5#</div>`
	}
	if (data == 27) {
		D.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레</div>`
		nameEng.innerHTML = `<div>D5</div>`
	}
	if (data == 28) {
		D.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레#</div>`
		nameEng.innerHTML = `<div>D5#</div>`
	}
	if (data == 29) {
		E.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>미</div>`
		nameEng.innerHTML = `<div>E5</div>`
	}
	if (data == 30) {
		F.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파</div>`
		nameEng.innerHTML = `<div>F5</div>`
	}
	if (data == 31) {
		F.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파#</div>`
		nameEng.innerHTML = `<div>F5#</div>`
	}
	if (data == 32) {
		G.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔</div>`
		nameEng.innerHTML = `<div>G5</div>`
	}
	if (data == 33) {
		G.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔#</div>`
		nameEng.innerHTML = `<div>G5#</div>`
	}
	if (data == 34) {
		A.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라</div>`
		nameEng.innerHTML = `<div>A5</div>`
	}
	if (data == 35) {
		A.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라#</div>`
		nameEng.innerHTML = `<div>A5#</div>`
	}
	if (data == 36) {
		B.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>시</div>`
		nameEng.innerHTML = `<div>B5</div>`
	}
	if (data == 37) {
		C.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도</div>`
		nameEng.innerHTML = `<div>C6</div>`
	}
	if (data == 38) {
		C.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>도</div>`
		nameEng.innerHTML = `<div>C6#</div>`
	}
	if (data == 39) {
		D.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레</div>`
		nameEng.innerHTML = `<div>D6</div>`
	}
	if (data == 40) {
		D.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>레#</div>`
		nameEng.innerHTML = `<div>D6#</div>`
	}
	if (data == 41) {
		E.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>미</div>`
		nameEng.innerHTML = `<div>E6</div>`
	}
	if (data == 42) {
		F.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파</div>`
		nameEng.innerHTML = `<div>F6</div>`
	}
	if (data == 43) {
		F.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>파#</div>`
		nameEng.innerHTML = `<div>F6#</div>`
	}
	if (data == 44) {
		G.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔</div>`
		nameEng.innerHTML = `<div>G6</div>`
	}
	if (data == 45) {
		G.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>솔#</div>`
		nameEng.innerHTML = `<div>G6#</div>`
	}
	if (data == 46) {
		A.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라</div>`
		nameEng.innerHTML = `<div>A6</div>`
	}
	if (data == 47) {
		A.style.backgroundColor = 'red';
		P.style.backgroundColor = 'skyblue';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>라#</div>`
		nameEng.innerHTML = `<div>A6#</div>`
	}
	if (data == 48) {
		B.style.backgroundColor = 'red';
		one.style.backgroundColor = 'red';
		two.style.backgroundColor = 'red';
		nameKor.innerHTML = `<div>시</div>`
		nameEng.innerHTML = `<div>B6</div>`
	}
}






