<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/serial/actualMode.css?ver=76">
<c:if test="${user == null}">
	<script>
		alert('로그인 후 이용해주세요')
		location.href = "/user/login"
	</script>
</c:if>
<input class="defaultTime" type="hidden" value="5">
<input id="iUser" type="hidden" value=${user.i_user }>
<input id="userPh" type="hidden" value=${user.user_phone }>
<div class="wholeDiv">
	<div class="flex_top">
		<div class="flex_sub_top">
			<div id="Timer">
				<img class="timerImg" alt="" src="/res/img/timer.png">
				<div class="timer">
					<div class="mask"></div>
				</div>
				<div class="countdown"></div>
			</div>
			<div class="flex">
				<div class="examCount"></div>
				<div class="examCount"></div>
				<div class="examCount"></div>
				<div class="examCount"></div>
				<div class="examCount"></div>
				<div class="examCount"></div>
			</div>
		</div>
		<div class="flex_sub_top">
			<div class="showOctaveDiv"></div>
			<div class="showTimeDiv"></div>
			<div onclick="setting()">
				<img class="settingImg" alt="" src="/res/img/setting.png">
			</div>
		</div>
	</div>

	<div class="flex_melody">
		<div id="createRandomValue"></div>
		<div class="reletiveDiv">
			<div class="currentSound">현재음</div>
			<div class="whiteColorDiv"></div>
			<div id="currentSoundOctave" class="currentSoundOctave">
			</div>
			<div id="nameKor" class="nameKor">
			</div>
		</div>
	</div>

	<!-- 설정 모달창 -->
	<div class="setBlack_bg"></div>
	<div class="setModal_wrap">
		<div class="flex_set">
			<div class="restart">시작하기</div>
			<div class="setModal_close">종료하기</div>
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
			<div>
				<div class="showRank"></div>
			</div>
			<div id="currentScoreDiv">현재기록</div>
			<div id="curRankFlex" class="curRankFlex">
				<div id="currentScoreRank"></div>
				<div class="userName">${user.user_nm }</div>
				<div class="userPhone"></div>
				<div id="currentScore">현재기록</div>
			</div>
			<div class="myBestScore">
				<span>나의</span> <span class="bestScoreSpan">최고 기록</span> <span
					class="myBestScore"> </span>
			</div>
			<div class="endFlex">
				<div class="endModal_restart" onclick="restart()">RESTART</div>
				<div class="endModal_home" onclick="moveHome()">HOME</div>
			</div>
		</div>
	</div>
</div>
<script defer src="/res/js/serial/actualMode/startDefaultSet.js?ver=1"></script>
<script defer src="/res/js/serial/actualMode/setting.js?ver=24"></script>
<script defer src="/res/js/serial/actualMode/dynamicFunctionCall.js?ver=31"></script>
<script defer src="/res/js/serial/actualMode/end.js?ver=8"></script>
<script defer src="/res/js/sms/sms.js?ver=17"></script>
