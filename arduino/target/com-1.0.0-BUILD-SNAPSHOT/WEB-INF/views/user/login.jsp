<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/login.css?ver=2">

<div id="main_div">
	<div class="title_div">
		<div><img class="main_logo"alt="" src="/res/img/title_logo.png"></div>
		<div class="title">내 목소리가 보여</div>
	</div>   
	<div class="login_div">
		<div><input class="user_id" type="text"></div>
		<div><input class="user_pw" type="password"></div>
		<div><input class="login_btn" type="button" value="로그인"></div>
	</div>
	<div class="find_div">
		<div class="findSub_div">
			<div >아이디 찾기</div>
			<div>비밀번호 찾기</div>
			<div onclick="moveJoin()">회원가입</div>
		</div>
	</div>
</div>


<script defer src="/res/js/user/login.js?ver=87"></script>





