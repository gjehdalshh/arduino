/*
function arduinoValueProc() {
	let id = document.querySelector('.data')
	
	let param = {
		id: id.value
	}
	console.log(param)
	
	var url = "http://localhost:8090/serial/practiceMode";
    $.ajax({
        type:"POST",
        url:url,
        dataType:"json",
        data:{
            id : id.value
        },
        success : function(data){
            console.log(data)
        },
        error : function(request,status,error){
            alert('code:'+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error); //에러 상태에 대한 세부사항 출력
            alert(e);
        }
    })
}

setInterval(arduinoValueProc, 1000)
*/
/*
$(document).ready(function(){
    $('#ajaxConGetButton').click(function(){
        AjaxConGet();
    })
    
    $('#ajaxConPostButton').click(function(){
        AjaxConPost();
    })
    
})
*/

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
			modeTest.innerHTML += `
				<div>${data.data}<div>
			`
		})
}
setInterval(mode)

 /*
function AjaxConGet(){
    var url = "/serial/pract";
    $.ajax({
        type:"GET",
        url:url,
        dataType:"application/json",
        data:{
            id : $('#ajaxConName').val()
        },
        success : function(data){
            alert('ajax GET 통신 성공');
			console.log(data)
        
        },
        error : function(request,status,error){
            alert('code:'+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error); //에러 상태에 대한 세부사항 출력
            alert(e);
        }
    })
    
}
 
function AjaxConPost(){
    var url = "/serial/practiceMode";
    $.ajax({
        type:"POST",
        url:url,
        dataType:"html",
        data:{
            id : $('#ajaxConName').val()
        },
        success : function(data){
            alert('ajax POST 통신 성공');

			console.log(data.id)
        },
        error : function(request,status,error){
            alert('code:'+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error); //에러 상태에 대한 세부사항 출력
            alert(e);
        }
    })
    
}
*/