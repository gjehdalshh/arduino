

function bb() {
	let aa = document.querySelector('.aa')
	console.log(aa.value)	
}

let loadData = document.getElementById('loadData')



function load(data) {
	for(let i = 0; i < 100; i++) {
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
				loadData.innerHTML += `
			<span>
			`+i+`</span>`
		})
	}
}