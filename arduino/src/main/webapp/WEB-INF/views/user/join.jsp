<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/join.css?ver=10">

<div id="main_div">
	<div class="main_logo">
		<img onclick="moveHome()" alt="" src="/res/img/mainlogo.png">
	</div>
	<div class="input_div">
			<div class="flex">
				<div class="textName">이름</div>
				<div class="user_name_div">
					<input class="user_name" type="text" placeholder="4글자 이하">
				</div>
			</div>
			<div class="flex">
				<div class="textId">아이디</div>
				<div class="user_id_div">
					<input class="user_id" type="text" placeholder="이메일 형식">
				</div>
			</div>
			<div class="flex">
				<div class="textPw">비밀번호</div>
				<div class="user_pw_div">
					<input class="user_pw" type="password">
				</div>
			</div>
			<div class="flex">
				<div class="textChkPw">비밀번호 확인</div>
				<div class="user_chkPw_div">
					<input class="user_chkPw" type="password">
				</div>
			</div>
			<div class="flex_last">
				<div class="textPhone">휴대전화</div>
				<div class="user_phone_div">
					<input class="user_phone" type="text" placeholder="-없이 기입">
				</div>
			</div>
			<div>
				<div class="join_flex">
					<div class="join_btn">확인</div>
					<div class="moveHome" onclick="moveHome()">취소</div>
				</div>
			</div>
	</div>
</div>

<script defer src="/res/js/user/join.js?ver=11"></script>