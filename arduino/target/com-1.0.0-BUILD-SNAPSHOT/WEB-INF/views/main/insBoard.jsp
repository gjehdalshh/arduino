<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div>
	<div>
		<input class="i_user" type="hidden" value="${user.i_user}">
		<input class="board_title" type="text">
		<input class="board_ctnt" type="text">
		<input class="insBoard_btn" type="button" value="글 등록">
	</div>
</div>

<script defer src="/res/js/main/insBoard.js?ver=15"></script>