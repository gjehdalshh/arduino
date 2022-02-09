
let page = document.getElementById('page3')

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
			findIdAjax(data.result)
		})
}
let findId = document.getElementById('findId')
function findIdAjax(data) {
	console.log('aaa')
	findId.innerHTML = `
		<div>${data.user_id}</div>
	`
}


