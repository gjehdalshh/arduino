<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/findInfo.css?ver=8">
<input class="currentPage" type="hidden" value="${param.page}">

<div id="main_div">
	<div class="flex_end">
		<div>
			<img onclick="moveHome()" class="main_logo" alt=""
				src="/res/img/main_logo.jpg">
		</div>
		<c:if test="${param.page == 1}">
			<div class="main_title">아이디찾기</div>
		</c:if>
		<c:if test="${param.page == 2}">
			<div class="main_title">비밀번호찾기</div>
		</c:if>
	</div>
	<div class="flex_borderBottom">
		<div onclick="movePage(1)" class="subTitileId">아이디찾기</div>
		<div onclick="movePage(2)" class="subTitilePw">비밀번호찾기</div>
	</div>
	<c:if test="${param.page == 1}">
		<div class="sub_div">
			<div id="findId"></div>
			<div>
				<div class="nm">이름</div>
				<div>
					<input class="user_nm" type="text">
				</div>
			</div>
			<div>
				<div class="ph">전화번호</div>
				<div>
					<input class="user_ph" type="text">
				</div>
			</div>
			<div>
				<input onclick="findInfo()" class="findId_btn" type="button"
					value="아이디 찾기">
			</div>
		</div>
	</c:if>
	<c:if test="${param.page == 2}">
		<div class="pwDiv">
			<div>
				<div class="id">아이디</div>
				<div>
					<input class="user_id" type="text">
				</div>
			</div>
			<div>
				<div class="nm">이름</div>
				<div>
					<input class="user_nm" type="text">
				</div>
			</div>
			<div>
				<div class="ph">전화번호</div>
				<div>
					<input class="user_ph" type="text">
				</div>
			</div>
			<div>
				<input onclick="findPw()" class="findPw_btn" type="button"
					value="비밀번호 찾기">
			</div>
		</div>
		<div class="pinCodeDiv">
			<div class="flex">
				<div class="pinCode">보안코드</div>
				<div><input class="pinCodeInput" type="text"></div>
				<div><input onclick="chkPw()" class="pinCodeSubmit" type="button" value="확인"></div>
			</div>
		</div>
		<div class="chkPwDiv">
			<div>
				<div class="newPw">새 비밀번호</div>
				<div>
					<input class="user_newPw" type="text">
				</div>
			</div>
			<div>
				<div class="newChkPw">새 비밀번호 확인</div>
				<div>
					<input class="user_newChkPw" type="text">
				</div>
			</div>
			<div>
				<input onclick="changePw()" class="changePw" type="button"
					value="비밀번호 변경">
			</div>
		</div>
	</c:if>
	<div class="sub_div">
		<input onclick="moveHome()" class="login_btn" type="button"
			value="로그인">
	</div>
</div>


<script defer src="/res/js/user/findInfo.js?ver=51"></script>