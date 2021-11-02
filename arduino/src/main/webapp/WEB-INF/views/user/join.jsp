<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/join.css?ver=3">

<div id="main_div">
	<div class="main_logo">
		<img alt="" src="/res/img/title_logo.png">
	</div>
	<div class="input_div">
		<form action="/user/join" method="post">
			<div>
				<div class="textId">아이디</div>
				<div>
					<input class="user_id" type="text" name="user_id">
				</div>
			</div>
			<div>
				<div class="textPw">비밀번호</div>
				<div>
					<input class="user_pw" type="password" name="user_pw">
				</div>
			</div>
			<div>
				<div class="textName">이름</div>
				<div>
					<input class="user_name" type="text" name="user_nm">
				</div>
			</div>
			<div>
				<div class="textNick">닉네임</div>
				<div>
					<input class="user_nick" type="text" name="user_nick">
				</div>
			</div>
			<div>
				<div class="textPhone">휴대전화</div>
				<div>
					<input class="user_phone" type="text" name="user_phone">
				</div>
			</div>
			<div>
				<div>
					<input class="join_btn" type="submit" value="회원가입">
				</div>
			</div>
		</form>
	</div>
</div>

<script defer src="/res/js/user/join.js?ver=5"></script>