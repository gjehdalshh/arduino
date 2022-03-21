

function bb() {
	let aa = document.querySelector('.aa')
	console.log(aa.value)	
}

let loadData = document.getElementById('loadData')

function load(data) {
	let param = {
		firstName : data
	}
	
	fetch('/main/home', {
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		body:JSON.stringify(param)
	}).then(function(res) {
		return res.json()
	}).then(function(data) {
		loadDataAjax(data.result)
	})
	
}


function loadDataAjax(data) {
	console.log(data)
	
	loadData.innerHTML += `
		<span>aa</span>
	`
	
	load(3)
}