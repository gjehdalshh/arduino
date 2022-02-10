<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/findInfo.css?ver=2">

<div>
	<c:if test="${param.page == 1}">
		<div>
			<div class="flex">
				<div>이름</div>
				<div><input class="user_nm" type="text"></div>
			</div>
			<div class="flex">
				<div>전화번호</div>
				<div><input class="user_ph" type="text"></div>
			</div>
			<div><input onclick="findInfo()" class="findInfo_btn" type="button" value="아이디 찾기"></div>
			<div id="findId"></div>
		</div>
	</c:if>
	<c:if test="${param.page == 2}">
		<div>bbb</div>
	</c:if>
</div>


<script defer src="/res/js/user/findInfo.js?ver=44"></script>