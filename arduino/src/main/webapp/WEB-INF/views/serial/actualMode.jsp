<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/serial/actualMode.css?ver=40">

<input class="defaultTime" type="hidden" value="5">
<div>
	<div id="Timer">
		<div class="timer">
			<div class="mask"></div>
		</div>
		<div class="countdown"></div>
	</div>

	<div>
		<div id="nameKor"></div>
		<div id="test" class="test"></div>
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
		<div class="octaveTitle">옥타브</div>
		<div class="setOctave">
			<div id="oc3" class="octave" onclick="setDefaultOctave(0)">3옥</div>
			<div id="oc4" class="octave" onclick="setDefaultOctave(1)">4옥</div>
			<div id="oc5" class="octave" onclick="setDefaultOctave(2)">5옥</div>
			<div id="oc6" class="octave" onclick="setDefaultOctave(3)">6옥</div>
		</div>
		<div class="timeTitle">난이도</div>
		<div class="setTime">
			<div id="time20" class="defaultTime" onclick="setDefaultTime(20)">
				하
				<div class="time">20초</div>
			</div>
			<div id="time15" class="defaultTime" onclick="setDefaultTime(15)">
				중
				<div class="time">15초</div>
			</div>
			<div id="time10" class="defaultTime" onclick="setDefaultTime(10)">
				상
				<div class="time">10초</div>
			</div>
		</div>
		<div class="setScore">
			<div>+1점</div>
			<div>+2점</div>
			<div>+3점</div>
		</div>
		<div class="modal_close">
			<div class="start_btn">START</div>
		</div>
	</div>

	<!-- 종료화면 모달창 -->
	<div>
		<div class="endBlack_bg"></div>
		<div class="endModal_wrap">
			<div class="rankTtile">순 위</div>
			<div class="rankFlex">
				<div class="rankImg">
					<img alt="" src="/res/img/first.png">
				</div>
				<div class="userName">이현아</div>
				<div class="userPhone">(3395)</div>
				<div>25점</div>
			</div>
			<div class="rankFlex">
				<div class="rankImg">
					<img alt="" src="/res/img/2nd.png">
				</div>
				<div class="userName">이현아</div>
				<div class="userPhone">(3395)</div>
				<div>13점</div>
			</div>
			<div class="rankFlex">
				<div class="rankImg">
					<img alt="" src="/res/img/3rd.png">
				</div>
				<div class="userName">이현아</div>
				<div class="userPhone">(3395)</div>
				<div>5점</div>
			</div>
			<div id="currentScoreDiv">현재기록</div>
			<div id="rankFlex" class="rankFlex">
				<div>6등</div>
				<div class="userName">이현아</div>
				<div class="userPhone">(3395)</div>
				<div id="currentScore">현재기록</div>
			</div>
			<div class="myBestScore">
				<span>나의</span> <span class="bestScoreSpan">최고 기록</span> <span>:
					25점</span>
			</div>
			<div class="endFlex">
				<div class="endModal_restart">RESTART</div>
				<div class="endModal_home">HOME</div>
			</div>
		</div>
	</div>
</div>
<script defer src="/res/js/serial/actualMode.js?ver=20"></script>

