<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<link rel="stylesheet" href="/res/css/user/myPage.css?ver=24">
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
					<div onclick="deleteUserCall()" class="deleteUser">회원탈퇴 ></div>
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
						<div class="filter_flex">
							<div class="popularity" onclick="sortBoardPopularity()">인기순</div>
							<div class="lately" onclick="sortBoardLately()">최신순</div>
						</div>
						<div id="sortBoard">
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

	<!-- 회원탈퇴 모달창 -->
	<div class="deleteUser_bg"></div>
	<div class="deleteUser_wrap">
		<div class="msg1">회원탈퇴</div>
		<div class="msg2">탈퇴 후 회원정보가 모두 삭제됩니다.</div>
		<div class="msg3"> - 메일주소, 핸드폰 번호/기타 연락처 등 회원정보가 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.</div>
		<div class="msg4">탈퇴 후에도 작성된 게시글은 그대로 남아 있습니다.</div>
		<div class="msg5"> - 각 게시판에 등록한 게시물 및 댓글은 탈퇴 후에도 남아있습니다.<br> - 삭제를 원하시는 게시물은 탈퇴 전 반드시
			삭제하시기 바랍니다.<br> - (탈퇴 후에는 게시글 임의 삭제 요청을 받지 않습니다.)</div>
		<div class="msg6">탈퇴 후에는 게시판의 게시글은 삭제할 수 없으며, 위의 안내 내용에 동의합니다.</div>
		<div class="sub_flex">
				<div class="id">아이디</div>
				<div class="user_id_div">
					<input class="user_id" type="text">
				</div>
			</div>
			<div class="sub_flex">
				<div class="pw">비밀번호</div>
				<div class="user_pw_div">
					<input class="user_pw" type="text">
				</div>
			</div>
			<div class="sub_flex_last">
				<div class="chkPw">비밀번호 확인</div>
				<div class="user_chkPw_div">
					<input class="user_chkPw" type="text">
				</div>
			</div>
		<div class="cancelAndDeleteDiv">
			<div class="cancel">취소</div>
			<div onclick="deleteUserAjax()" class="deleteUserBtn">삭제</div>
		</div>
	</div>
</div>

<script defer src="/res/js/user/myPage.js?ver=23"></script>
