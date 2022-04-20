<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div>
	<h2>Ajax Communication</h2>
    <input id="data" type="text" value="${applicationScope.data}">
    이름 : <input type="text" id = "ajaxConName"/>
    <br>
    <input type="text" onclick="mode()" id = "ajaxConGetButton" value ="Get통신">
    <input type="button" id = "ajaxConPostButton" value ="Post 통신">
    <div id="myDiv"></div>
    <div id="modeTest" class="modeTest"></div>
</div>

<script defer src="/res/js/serial/practiceMode.js?ver=60"></script>
