<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/serial/actualMode.css?ver=6">
<input class="defaultTime" type="hidden" value="5">
<div>
	<div id="Timer">
		<div class="timer">
			<div class="mask"></div>
		</div>
		<div class="countdown"></div>
	</div>
	
	<div>
		<div id="test" class="test"></div>
	</div>

	<div class="black_bg"></div>
	<div class="modal_wrap">
		<div>옥타브 설정</div>
		<div class="setOctave">
			<div id="oc3" class="octave" onclick="getOctaveValue(0)">3옥타브</div>
			<div id="oc4" class="octave" onclick="getOctaveValue(1)">4옥타브</div>
			<div id="oc5" class="octave" onclick="getOctaveValue(2)">5옥타브</div>
			<div id="oc6" class="octave" onclick="getOctaveValue(3)">6옥타브</div>
		</div>
		<div class="modal_close">
			<div>시작하기</div>
		</div>
	</div>
</div>

<script defer src="/res/js/serial/actualMode.js?ver=31"></script>

