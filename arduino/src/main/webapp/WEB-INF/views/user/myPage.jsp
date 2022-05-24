<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/myPage.css?ver=72">
<c:if test="${user == null}">
	<script>
		alert('로그인 후 이용해주세요')
		location.href = "/user/login"
	</script>
</c:if>
<input id="iUser" type="hidden" value=${user.i_user }>
<div>
	<form action="/user/actualModeList" name="myInfo" method="get">
	<input type="submit" value="실전모드">
	</form>

	<c:if test="${URL == 'actualModeList'}">
		<div class="actualModeList">
			실전모드 기록
			<c:forEach items="${value}" var="item">
				<div>${item.octave}</div>
			</c:forEach>
		</div>
	</c:if>

</div>
<script defer src="/res/js/user/myPage.js?ver=17"></script>
