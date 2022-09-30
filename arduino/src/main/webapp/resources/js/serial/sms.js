let temporaryStoredData
let i_user

function recordDataBeforeChanging() {
	fetch(`/sms/selectUserRank`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
	}).then(function(res){
		return res.json()
	}).then(function(data){
		console.log(data.result)
		temporaryStoredData = data.result.i_score_record
		i_user = data.result.i_user
	})
}

function checkRecordDataAfterChanging() {
	fetch(`/sms/selectUserRank`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
	}).then(function(res){
		return res.json()
	}).then(function(data){
		checkRecord(data.result)
	})
}

function checkRecord(data) {
	console.log('10등 번호 :' +temporaryStoredData)
	console.log('변경된 10등 번호 : '+ data.i_score_record)
	if(temporaryStoredData != data.i_score_record) {
		smsSendAjax()
	}
}

function smsSendAjax() {
	var param = {
		i_user: i_user
	}
	
	fetch(`/sms/send`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(param)
	}).then(function(res) {
		return res.json()
	}).then(function(data){
		switch(data.result) {
			case 1:
				alert('등수에서 밀어냈습니다!!')
				break
			case 2:
				alert('휴대폰 전송에 실패하였습니다.')
				break
		}
	})
}




