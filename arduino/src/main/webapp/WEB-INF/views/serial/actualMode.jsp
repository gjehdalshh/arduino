<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/serial/actualMode.css?ver=21">
<input class="defaultTime" type="hidden" value="5">
<div>
	<div id="Timer">
		<div class="timer">
			<div class="mask"></div>
		</div>
		<div class="countdown"></div>
	</div>

	<div class="black_bg"></div>
	<div class="modal_wrap">
		<div>옥타브 설정</div>
		<div class="setOctave">
			<div class="octave">3옥타브</div>
			<div class="octave">4옥타브</div>
			<div class="octave">5옥타브</div>
			<div class="octave">6옥타브</div>
		</div>
		<div class="modal_close">
			<div>시작하기</div>
		</div>
	</div>
</div>

<script defer src="/res/js/serial/actualMode.js?ver=95"></script>

