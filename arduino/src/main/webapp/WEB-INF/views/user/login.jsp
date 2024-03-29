<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/login.css?ver=78">

<div id="main_div">
	<div class="title_div">
		<div>
			<img class="main_logo" alt="" src="/res/img/mainlogo.png">
		</div>
	</div>
	<div class="login_div">
		<div class="flex">
			<div>
				<img class="id_logo" alt="" src="/res/img/id_logo.png">
			</div>
			<div>
				<input onkeyup="enterkey()" class="user_id" type="text"
					 placeholder="아이디">
			</div>
		</div>
		<div class="flex">
			<div>
				<img class="pw_logo" alt="" src="/res/img/pw_logo.png">
			</div>
			<div>
				<input class="user_pw" onkeyup="enterkey()" type="password"
					 placeholder="비밀번호">
			</div>
		</div>
		<div class="lgoin_btn_div_desktop">
			<input class="login_btn" onclick="loginDesktop()" type="button"
				value="로그인">
		</div>
		<div class="lgoin_btn_div_mobile">
			<input class="login_btn" onclick="loginMobile()" type="button"
				value="로그인">
		</div>
		<div class="find_div">
			<div class="findSub_div">
				<div class="cursor" onclick="moveJoin()">회원가입</div>
				<div class="cursor" onclick="moveFindInfo(1)">아이디/비밀번호 찾기</div>
			</div>
		</div>
		<div class="variousLogins">소셜 로그인</div>
		<div class="flex">
			<div>
				<a
					href="https://kauth.kakao.com/oauth/authorize?client_id=c0619824ec57add63ccf0d6c388122d7&redirect_uri=http://localhost:8090/user/kakao/login&response_type=code">
					<img class="kakao_login_btn" alt="" src="/res/img/kakao_login.png">
				</a>
			</div>
			<div>
				<a> <img class="naver_login_btn" alt=""
					src="/res/img/naver_login.png">
				</a>
			</div>
		</div>
	</div>
	<div class="comment">로그인하시면 커뮤니티를 이용하실 수 있습니다.</div>
</div>


<script defer src="/res/js/user/login.js?ver=88"></script>





