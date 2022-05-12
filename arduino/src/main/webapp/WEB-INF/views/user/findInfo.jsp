<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/findInfo.css?ver=25">
<input class="currentPage" type="hidden" value="${param.page}">

<div id="main_div">
	<div class="flex_end">
		<div>
			<img onclick="moveHome()" class="main_logo" alt=""
				src="/res/img/mainlogo.png">
		</div>
	</div>
	<div class="flex_borderBottom">
		<div onclick="movePage(1)" class="subTitileId">아이디찾기</div>
		<div onclick="movePage(2)" class="subTitilePw">비밀번호찾기</div>
	</div>
	<c:if test="${param.page == 1}">
		<div class="sub_div">
			<div class="sub_flex">
				<div class="nm">이름</div>
				<div class="user_nm_div">
					<input class="user_nm" type="text">
				</div>
			</div>
			<div class="sub_flex_last">
				<div class="ph">전화번호</div>
				<div class="user_ph_div">
					<input class="user_ph" type="text">
				</div>
			</div>
			<div id="findId"></div>
			<div>
				<div class="findId_flex">
					<div onclick="findId()" class="findId_btn">확인</div>
					<div class="moveHome" onclick="moveHome()">취소</div>
				</div>
			</div>
		</div>
	</c:if>
	<c:if test="${param.page == 2}">
		<div class="pwDiv">
			<div class="sub_flex">
				<div class="id">아이디</div>
				<div class="user_id_div">
					<input class="user_id" type="text">
				</div>
			</div>
			<div class="sub_flex">
				<div class="nm">이름</div>
				<div class="user_nm_div">
					<input class="user_nm" type="text">
				</div>
			</div>
			<div class="sub_flex_last">
				<div class="ph">전화번호</div>
				<div class="user_ph_div">
					<input class="user_ph" type="text">
				</div>
			</div>
			<div class="pinCodeDiv">
				<div class="flex">
					<div class="pinCode">보안코드</div>
					<div>
						<input class="inputPinCode" type="text">
					</div>
					<div>
						<input onclick="comparePincode()" class="pinCodeSubmit"
							type="button" value="확인">
					</div>
				</div>
			</div>
			<div>
				<div class="findPw_flex">
					<div onclick="findPw()" class="findPw_btn">확인</div>
					<div class="moveHome" onclick="moveHome()">취소</div>
				</div>
			</div>
		</div>
		<div class="chkPwDiv">
			<div class="sub_flex">
				<div class="newPw">새 비밀번호</div>
				<div class="user_newPw_div">
					<input class="userNewPw" type="text">
				</div>
			</div>
			<div class="sub_flex_last">
				<div class="newChkPw">새 비밀번호 확인</div>
				<div class="user_newChkPw_div">
					<input class="userNewChkPw" type="text">
				</div>
			</div>
			<div>
				<div class="changePw_flex">
					<div onclick="changePw()" class="changePw">확인</div>
					<div class="moveHome" onclick="moveHome()">취소</div>
				</div>
			</div>
		</div>
	</c:if>
</div>


<script defer src="/res/js/user/findInfo.js?ver=50"></script>