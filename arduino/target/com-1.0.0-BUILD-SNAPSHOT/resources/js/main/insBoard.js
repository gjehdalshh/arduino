
var insBoard_btn = document.querySelector('.insBoard_btn')

insBoard_btn.onclick = function() {
	var id = document.querySelector('.i_user')
	var title = document.querySelector('.board_title')
	var ctnt = document.querySelector('.board_ctnt')
	
	var param = {
		i_user: id.value,
		board_title: title.value,
		board_ctnt: ctnt.value
	}
	console.log(param)
	
	fetch(`/main/insBoard`, {
			method: 'POST',
			headers: {
		'Content-Type': 'application/json'
			},
			body:JSON.stringify(param)
		}).then(function(res) {
			return res.json()
		}).then(function(data) {
			console.log(data)
			switch(data.result) {
				case 1:
					alert('글 등록에 성공하였습니다')
					break;
				case 2:
					alert('내용이 존재하지 않습니다')
					break;
			}
		})
}