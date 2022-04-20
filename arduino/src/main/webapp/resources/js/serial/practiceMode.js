let modeTest = document.getElementById('modeTest')
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
			modeTest.innerHTML = `
				<div>${data.data}<div>
			`
		})
}
setInterval(mode)