<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/myPage.css?ver=20">
<c:if test="${user == null}">
	<script>
		alert('로그인 후 이용해주세요')
		location.href = "/user/login"
	</script>
</c:if>
<div id="mainDiv">
	<div class="mainLogoDiv">
		<img class="mainLogo" onclick="home()" alt=""
			src="/res/img/mainlogo.png">
	</div>
	<div class="flex">
		<div id="mainLeftDiv">
			<div>
				<img class="myProfileImg" alt="" src="/res/img/test.gif">
			</div>
			<div class="myName">허동민</div>
			<div class="myId">gjehdalshh@naver.com</div>
			<div class="navDiv">
				<form action="/user/myInfo" method="get">
					<input id="myProfileCategory" class="leftUlActualMode" type="submit" value="내 프로필">
				</form>
				<form action="/user/actualModeList" method="get">
					<input id="actualModeRecordCategory" class="leftUlActualMode" type="submit" value="실전모드 기록">
				</form>
				<form action="/user/myBoardList" method="get">
					<input id="myPostCategory" class="leftUlActualMode" type="submit" value="내가 쓴 글">
				</form>
				<form action="/user/myCmtList" method="get">
					<input id="myCmtCategory" class="leftUlActualMode" type="submit" value="댓글 단 글">
				</form>
				<form action="/user/myScrapList" method="get">
					<input id="myScrapCategory" class="leftUlActualMode" type="submit" value="스크랩">
				</form>
			</div>
		</div>
		<div id="mainRightDiv">
			<div class="myInfoBoxDiv">
				<div class="myInfoBox">
					<div class="defaultInfo">기본정보</div>
					<div class="defaultNameDiv">
						<div class="defaultName">석지연</div>
						<div class="infoModify">수정</div>
					</div>
					<div class="defaultId_flex">
						<div class="default_flex">
							<div class="default_sub_flex">
								<div>
									<img alt="" src="/res/img/mail.png">
								</div>
								<div class="defaultId">gjehdalshh@naver.com</div>
							</div>
							<div>
								<div class="infoModify">수정</div>
							</div>
						</div>
					</div>
					<div class="defaultPh_flex">
						<div class="default_flex">
							<div class="default_sub_flex">
								<div>
									<img alt="" src="/res/img/phone.png">
								</div>
								<div class="defaultPh">010-2757-6511</div>
							</div>
							<div>
								<div class="infoModify">수정</div>
							</div>
						</div>
					</div>
				</div>
				<div class="deleteUser">회원탈퇴 ></div>
			</div>
			<div class="actualModeListDiv">
				<c:if test="${URL == 'actualModeList'}">
				<div class="actualModeRecord">실전모드 기록</div>
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
							<c:set var="i" value="${i+1}"></c:set>
							<div class="actual_flex">
								<div class="actaulNumberValue">${i}</div>
								<div class="actualDateValue">${actualModeList.r_dt.substring(0, 10)}</div>
								<div class="actualOctaveValue">${actualModeList.octave}</div>
								<div class="actualLevelValue">${actualModeList.level}</div>
								<div class="actualScoreValue">${actualModeList.actual_mode_score}</div>
							</div>
						</c:forEach>
					</div>
				</c:if>
			</div>
			<div class="myPostListDiv">
				<div class="myPostList">
					<div class="lately">최신순</div>
					<div class="list_flex">
						<div class="postNumber">1</div>
						<div class="postTitle">실전모드 너무 어렵다구요</div>
						<div class="postCategory">자유게시판</div>
						<div class="postDate">2022.05.24</div>
					</div>
					<div class="list_flex">
						<div class="postNumber">2</div>
						<div class="postTitle">저는
							쉽던데..ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>
						<div class="postCategory">자유게시판</div>
						<div class="postDate">2022.05.24</div>
					</div>
					<div class="list_flex">
						<div class="postNumber">3</div>
						<div class="postTitle">점수 인증합니다.</div>
						<div class="postCategory">자유게시판</div>
						<div class="postDate">2022.05.23</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script defer src="/res/js/user/myPage.js?ver=11"></script>
