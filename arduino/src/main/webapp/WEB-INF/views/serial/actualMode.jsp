<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/serial/actualMode.css?ver=14">
<input class="defaultTime" type="hidden" value="5">
<div>
	<div id="Timer">
		<div class="timer">
			<div class="mask">
			</div>
		</div>
		<div class="countdown"></div>
	</div>

	<div onclick="test()">시작</div>
</div>

<script defer src="/res/js/serial/actualMode.js?ver=89"></script>

