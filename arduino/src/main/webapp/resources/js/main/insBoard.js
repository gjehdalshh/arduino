
var insBoard_btn = document.querySelector('.insBoard_btn')

insBoard_btn.onclick = function() {
	let id = document.querySelector('.i_user')
	let title = document.querySelector('.board_title')
	let ctnt = document.querySelector('.board_ctnt')
	let boardList = document.querySelector('.i_board_list')
	
	let param = {
		i_user: id.value,
		board_title: title.value,
		board_ctnt: ctnt.value,
		i_board_list: boardList.value
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
					alert('제목을 작성해주세요')
					break;
				case 3:
					alert('내용을 10글자 이상 작성해주세요')
					break;
			}
		})
		
}
