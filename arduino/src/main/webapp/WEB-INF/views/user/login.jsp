<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/login.css?ver=13">

<div id="main_div">
	<div class="title_div">
		<div><img class="main_logo"alt="" src="/res/img/mainlogo.png"></div>
	</div>   
	<div class="login_div">
		<div class="flex">
			<div><img class="id_logo"alt="" src="/res/img/id_logo.png"></div>
			<div><input onkeyup="enterkey()" class="user_id" type="text" value="smdf01726@naver.com" placeholder="아이디"></div>
		</div>
		<div class="flex">
			<div><img class="pw_logo"alt="" src="/res/img/pw_logo.png"></div>
			<div><input class="user_pw" onkeyup="enterkey()" type="password" value="smdf01726" placeholder="비밀번호"></div>
		</div>
		<div><input class="login_btn" onclick="login()" type="button" value="로그인"></div>
	</div>
	<div class="find_div">
		<div class="findSub_div">
			<div class="cursor" onclick="moveJoin()">회원가입</div>
			<div class="cursor" onclick="moveFindInfo(1)">아이디/비밀번호 찾기</div>
		</div>
	</div>
	<div class="comment">
		로그인하시면 커뮤니티를 이용하실 수 있습니다.
	</div>
</div>


<script defer src="/res/js/user/login.js?ver=87"></script>





