<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/main/home.css?ver=5">

<div id="mainDiv">
	<div class="flexBetween" id="headerDiv">
		<div class="leftHeaderDiv">
			<div class="mainLogoDiv">
				<img class="mainLogo" alt="" src="/res/img/main_logo.jpg">
			</div>
			<div class="mainTitle">내 목소리가 보여</div>
		</div>
		<div class="rightHeaderDiv">
			<div class="subInfo">허동민</div>
			<div class="subInfo">마이페이지</div>
			<div class="subInfo">로그아웃</div>
		</div>
	</div>
	<div id="bodyDiv">
		<div class="selectMode">
			<div class="practiceMode">연습모드</div>
			<div class="liveMode">실전모드</div>
		</div>
		<div class="freeBoard">
			<div class="subTitle">커뮤니티</div>
			<div class="subCtnt">
				<div>테스트입니다</div>
				<div>컴퓨터삽니다</div>
				<div>객체지향언어</div>
			</div>
		</div>
		<div class="subBoard">
			<div class="noticeBoard">
				<div class="subTitle">Notice</div>
				<div class="subCtnt">
					<div>공지사항입니다</div>
					<div>확인</div>
				</div>
			</div>
			<div class="scoreBoard">
				<div class="subTitle">Weekly Best</div>
				<div class="subCtnt">
					<div>점수인증합니다</div>
					<div>100점이 나왔어요</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script defer src="/res/js/main/home.js?ver=90"></script>