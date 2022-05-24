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
				<div class="leftUl">내 프로필</div>
				<div class="leftUl">실전모드 기록</div>
				<div class="leftUl">내가 쓴 글</div>
				<div class="leftUl">댓글 단 글</div>
				<div class="leftUl">스크랩</div>
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
				<div class="actualModeRecord">실전모드 기록</div>
				<div>
					<form action="/user/actualModeList" name="myInfo" method="get">
						<input type="submit" value="실전모드">
					</form>

					<c:if test="${URL == 'actualModeList'}">
						<div class="actualModeList">
							실전모드 기록
							<c:forEach items="${value}" var="item">
								<div>${item.octave}</div>
							</c:forEach>
						</div>
					</c:if>

				</div>
				<div class="actualModeList">
					<div class="lately">최신순</div>
					<div class="actual_flex">
						<div class="actaulNumber">번호</div>
						<div class="actualDate">날짜</div>
						<div class="actualOctave">옥타브</div>
						<div class="actualLevel">난이도</div>
						<div class="actualScore">점수</div>
					</div>
					<div class="actual_flex">
						<div class="actaulNumberValue">1</div>
						<div class="actualDateValue">2022.05.23</div>
						<div class="actualOctaveValue">4</div>
						<div class="actualLevelValue">중</div>
						<div class="actualScoreValue">17</div>
					</div>
					<div class="actual_flex">
						<div class="actaulNumberValue">1</div>
						<div class="actualDateValue">2022.05.21</div>
						<div class="actualOctaveValue">3</div>
						<div class="actualLevelValue">하</div>
						<div class="actualScoreValue">19</div>
					</div>
					<div class="actual_flex">
						<div class="actaulNumberValue">1</div>
						<div class="actualDateValue">2022.05.23</div>
						<div class="actualOctaveValue">4</div>
						<div class="actualLevelValue">중</div>
						<div class="actualScoreValue">17</div>
					</div>
				</div>
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

<script defer src="/res/js/user/myPage.js?ver=17"></script>
