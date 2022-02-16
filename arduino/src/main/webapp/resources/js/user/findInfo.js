
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

	findId.innerHTML = `
		<div>${data.user_id}</div>
	`
}


