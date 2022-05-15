let login = document.querySelector('.login')
let join = document.querySelector('.join')

login.onclick = function() {
	location.href = `/user/login`
}
join.onclick = function() {
	location.href = `/user/join`
}
