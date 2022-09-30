<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/main/home.css?ver=26">

<div id="mainDiv">
	<div id="header">
		<div class="top">
			<div class="logoAndInput">
				<div class="mainLogoDiv">
					<img class="mainLogo" onclick="home()" alt="" src="/res/img/mainlogo.png">
				</div>
			</div>
		</div>
		<div class="subCategori">
			<div class="flex">
				<form class="myProfile" action="/user/myInfo" method="get">
					<input id="myProfileCategory" class="leftUlActualMode" type="submit" value="마이페이지">
				</form>
				<div class="notice">공지사항</div>
				<div class="questionAndAnswer">Q&A</div>
			</div>
			<div class="flex">
				<div>
					<input class="search" type="text" placeholder="SEARCH">
				</div>
				<c:if test="${user == null}">
					<div class="login" onclick="login()">로그인</div>
					<div class="join" onclick="join()">회원가입</div>
				</c:if>
				<c:if test="${user != null}">
					<div class="userName">${user.user_nm }님</div>
					<c:if test="${kakaoToken != null}">
						<div class="logout"><a href="https://kauth.kakao.com/oauth/logout?client_id=c0619824ec57add63ccf0d6c388122d7&logout_redirect_uri=http://localhost:8090/user/logout">로그아웃</a></div>
					</c:if>
					<c:if test="${kakaoToken == null}">
						<div class="logout"><a href="/user/logout">로그아웃</a></div>
					</c:if>
				</c:if>
			</div>
		</div>
	</div>
	<div class="practiceModeDiv">
		<div class="introducePractice">
			<div class="titleMode">연습모드</div>
			연습모드는 사용자가 도구를 사용하기 전<br> 미리 익숙해지는 단계입니다.<br> <br> <a
				href="/serial/practiceMode">연습모드 하러 가기 ></a>
		</div>
		<div>
			<img class="practiceModeImg" alt="" src="/res/img/practice.jpg">
		</div>
	</div>
	<div class="actualModeDiv">
		<div>
			<img class="actualModeImg" alt="" src="/res/img/actual.jpg">
		</div>
		<div class="introduceActualMode">
			<div class="titleMode">실전모드</div>
			실전모드는 사용자가 도구를 사용하여<br> 직접 느껴보는 단계입니다.<br> <br> <a
				href="/serial/actualMode">실전모드 하러 가기 ></a>
		</div>
	</div>
	<div class="board">
		<div>
			<h4 class="bestH3">Weekly Best</h4>
			<div class="bestBoard">
				<div class="borderBottom">
					<div>테스트</div>
					<div>2022-04-18</div>
					<div>허동민</div>
				</div>
				<div class="borderBottom">
					<div>테스트</div>
					<div>2022-04-18</div>
					<div>허동민</div>
				</div>
				<div class="borderBottom">
					<div>테스트</div>
					<div>2022-04-18</div>
					<div>허동민</div>
				</div>
			</div>
		</div>
		<div>
			<h4 class="communityH3">커뮤니티</h4>
			<div class="communityBoard">
				<div class="borderBottom">
					<div>테스트</div>
					<div>2022-04-18</div>
					<div>허동민</div>
				</div>
				<div class="borderBottom">
					<div>테스트</div>
					<div>2022-04-18</div>
					<div>허동민</div>
				</div>
				<div class="borderBottom">
					<div>테스트</div>
					<div>2022-04-18</div>
					<div>허동민</div>
				</div>
			</div>
		</div>
	</div>
</div>


<script defer src="/res/js/main/home.js?ver=14"></script>
