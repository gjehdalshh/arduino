<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/myPage.css?ver=23">
<c:if test="${user == null}">
	<script>
		alert('로그인 후 이용해주세요')
		location.href = "/user/login"
	</script>
</c:if>
<input id="iUser" type="hidden" value=${user.i_user }>
<div id="mainDiv">
	<div class="mainLogoDiv">
		<img class="mainLogo" onclick="moveHome()" alt=""
			src="/res/img/mainlogo.png">
	</div>
	<div class="flex">
		<div id="mainLeftDiv">
			<div>
				<img class="myProfileImg" alt="" src="/res/img/test.gif">
			</div>
			<div class="myName">${user.user_nm }</div>
			<div class="myId">${user.user_id }</div>
			<div class="navDiv">
				<form action="/user/myInfo" method="get">
					<input id="myProfileCategory" class="leftUl" type="submit"
						value="내 프로필">
				</form>
				<form action="/user/actualModeList" method="get">
					<input id="actualModeRecordCategory" class="leftUl" type="submit"
						value="실전모드 기록">
				</form>
				<form action="/user/myBoardList" method="get">
					<input id="myPostCategory" class="leftUl" type="submit"
						value="내가 쓴 글">
				</form>
				<form action="/user/myCmtList" method="get">
					<input id="myCmtCategory" class="leftUl" type="submit"
						value="댓글 단 글">
				</form>
				<form action="/user/myScrapList" method="get">
					<input id="myScrapCategory" class="leftUl" type="submit"
						value="스크랩">
				</form>
			</div>
		</div>
		<div id="mainRightDiv">
			<c:if test="${URL == 'myInfo'}">
				<div class="myInfoBoxDiv">
					<div class="myInfoBox">
						<div class="defaultInfo">기본정보</div>
						<div class="defaultNameDiv">
							<div class="defaultName">${user.user_nm }</div>
							<div onclick="infoModofy(1)" class="infoModify">수정</div>
						</div>
						<div class="defaultId_flex">
							<div class="default_flex">
								<div class="default_sub_flex">
									<div>
										<img alt="" src="/res/img/mail.png">
									</div>
									<div class="defaultId">${user.user_id }</div>
								</div>
							</div>
						</div>
						<div class="defaultPh_flex">
							<div class="default_flex">
								<div class="default_sub_flex">
									<div>
										<img alt="" src="/res/img/phone.png">
									</div>
									<div class="defaultPh">${user.user_phone }</div>
								</div>
								<div>
									<div onclick="infoModofy(2)" class="infoModify">수정</div>
								</div>
							</div>
						</div>
					</div>
					<div class="deleteUser">회원탈퇴 ></div>
				</div>
			</c:if>
			<c:if test="${URL == 'actualModeList'}">
				<div class="actualModeListDiv">
					<div class="actualModeRecord">실전모드 기록</div>
					<div>
						<div class="actualModeList">
							<div class="lately">최신순</div>
							<div class="actual_flex">
								<div class="actaulNumber">번호</div>
								<div class="actualDate">날짜</div>
								<div class="actualOctave">옥타브</div>
								<div class="actualLevel">난이도</div>
								<div class="actualScore">점수</div>
							</div>
							<c:forEach items="${actualModeList}" var="actualModeList">
								<c:set var="i" value="${i+1 }"></c:set>
								<div class="actual_flex">
									<div class="actaulNumberValue">${i }</div>
									<div class="actualDateValue">${actualModeList.r_dt.substring(0,10) }</div>
									<div class="actualOctaveValue">${actualModeList.octave }</div>
									<div class="actualLevelValue">${actualModeList.level }</div>
									<div class="actualScoreValue">${actualModeList.actual_mode_score }</div>
								</div>
							</c:forEach>
						</div>
					</div>
				</div>
			</c:if>
			<c:if test="${URL == 'myBoardList'}">
				<div class="myPostListDiv">
					<div class="myPostTitle">내가 쓴 글</div>
					<div class="myPostList">
						<div class="lately">최신순</div>
						<c:forEach items="${myBoardList}" var="myBoardList">
							<c:set var="i" value="${i+1 }"></c:set>
							<div class="list_flex">
								<div class="postNumber">${i }</div>
								<div class="postTitle">${myBoardList.board_title }</div>
								<div class="postCategory">${myBoardList.board_list_nm }</div>
								<div class="postDate">${myBoardList.m_dt.substring(0, 10) }</div>
							</div>
						</c:forEach>
					</div>
				</div>
			</c:if>
		</div>
	</div>

	<!-- 이름 변경 모달창  -->
	<div class="modifyName_bg"></div>
	<div class="modifyName_wrap">
		<div>이름변경</div>
		<div>
			<input class="currentName" type="text" placeholder="현재이름">
		</div>
		<div>
			<input class="modifyName" type="text" placeholder="변경할이름">
		</div>
		<div class="flex">
			<div class="restart">취소</div>
			<div onclick="modifyNameCall()" class="setModal_close">변경</div>
		</div>
	</div>

	<!-- 휴대폰 변경 모달창 -->
	<div class="modifyPhone_bg"></div>
	<div class="modifyPhone_wrap">
		<div>휴대폰번호변경</div>
		<div>
			<input class="currentPhone" type="text" placeholder="현재휴대폰번호">
		</div>
		<div>
			<input class="modifyPhone" type="text" placeholder="변경할휴대폰번호">
		</div>
		<div class="flex">
			<div class="restart">취소</div>
			<div onclick="modifyPhoneCall()" class="setModal_close">변경</div>
		</div>
	</div>
</div>

<script defer src="/res/js/user/myPage.js?ver=19"></script>
