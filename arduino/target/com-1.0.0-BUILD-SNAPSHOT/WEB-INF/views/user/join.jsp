<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/join.css?ver=3">

<div id="main_div">
	<div class="main_logo">
		<img alt="" src="/res/img/title_logo.png">
	</div>
	<div class="input_div">
			<div>
				<div class="textId">아이디</div>
				<div>
					<input class="user_id" type="text" placeholder="이메일 형식">
				</div>
			</div>
			<div>
				<div class="textPw">비밀번호</div>
				<div>
					<input class="user_pw" type="password">
				</div>
			</div>
			<div>
				<div class="textChkPw">비밀번호 확인</div>
				<div>
					<input class="user_chkPw" type="password">
				</div>
			</div>
			<div>
				<div class="textName">이름</div>
				<div>
					<input class="user_name" type="text" placeholder="4글자 이하">
				</div>
			</div>
			<div>
				<div class="textNick">닉네임</div>
				<div>
					<input class="user_nick" type="text">
				</div>
			</div>
			<div>
				<div class="textPhone">휴대전화</div>
				<div>
					<input class="user_phone" type="text" placeholder="-없이 기입">
				</div>
			</div>
			<div>
				<div>
					<input class="join_btn" type="button" value="회원가입">
				</div>
			</div>
	</div>
</div>

<script defer src="/res/js/user/join.js?ver=10"></script>