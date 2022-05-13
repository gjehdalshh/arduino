<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/serial/actualMode.css?ver=30">

<input class="defaultTime" type="hidden" value="5">
<div>
	<div id="Timer">
		<div class="timer">
			<div class="mask"></div>
		</div>
		<div class="countdown"></div>
	</div>

	<div>
		<div id="test"></div>
	</div>

	<!-- 설정 모달창 -->
	<div onclick="setting()">설정</div>

	<div class="setBlack_bg"></div>
	<div class="setModal_wrap">
		<div class="restart">시작하기</div>
		<div class="setModal_close">
			<div>종료하기</div>
		</div>
	</div>


	<!-- 초기화면 모달창 -->
	<div class="black_bg"></div>
	<div class="modal_wrap">
		<div>옥타브 설정</div>
		<div class="setOctave">
			<div id="oc3" class="octave" onclick="setDefaultOctave(0)">3옥타브</div>
			<div id="oc4" class="octave" onclick="setDefaultOctave(1)">4옥타브</div>
			<div id="oc5" class="octave" onclick="setDefaultOctave(2)">5옥타브</div>
			<div id="oc6" class="octave" onclick="setDefaultOctave(3)">6옥타브</div>

		</div>
		<div class="setTime">
			<div id="time10" class="defaultTime" onclick="setDefaultTime(10)">10초</div>
			<div id="time15" class="defaultTime" onclick="setDefaultTime(15)">15초</div>
			<div id="time20" class="defaultTime" onclick="setDefaultTime(20)">20초</div>

		</div>
		<div class="modal_close">
			<div>시작하기</div>
		</div>
	</div>

	<!-- 종료화면 모달창 -->
	<div>
		<div class="endBlack_bg"></div>
		<div class="endModal_wrap">
			<div id="currentScore"></div>
			<div class="endModal_close">
				<div>종료하기</div>
			</div>
		</div>
	</div>
</div>
	<script defer src="/res/js/serial/actualMode.js?ver=14"></script>