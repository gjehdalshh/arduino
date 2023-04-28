## 청각장애인을 위한 음의 시각 및 촉각화
* #### 아두이노에 마이크 센서를 연결하여 실시간으로 말하는 목소리의 음을 분석하여
    #### 촉각으로는 손가락에 진동, 시각으로는 웹을 통해 실시간으로 내는 음의 옥타브를 확인할 수 있도록 함
* #### 연습모드를 통해 연습하고, 실전모드를 통해 기록을 남길 수 있음
* #### 커뮤니티를 통한 유저간의 활발한 교류 가능
* #### Spring, AWS - RDS, EC2로 개발
* #### 반응형 웹으로 개발하여 PC, Mobile 버전 이용 가능

### Front & Back 혼자 작업 - 개인 프로젝트

<p align="center">
  <img src="https://user-images.githubusercontent.com/77053445/233032703-f864f547-f25a-4379-99c9-04467646a244.png">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/77053445/233032752-1e885cbe-e39f-476b-87d2-bc304704c708.png">
</p>

# Arduino Project V.1 API Document
## 소개
##### 아두이노 프로젝트 API 문서입니다.
##### 본 프로젝트는 청각 장애인들의 위한 재활을 목적으로 하여 아두이노와 연동하여 진행하는 프로젝트입니다.  
<br></br>
## 공통사항
### Domain
| 환경 | 도메인 |
|:---:|:---:|
| Tomcat 개발서버 | `http://localhost:8090` |
| WAS 배포 서버 | `http://3.35.247.152:8080` |

<br></br>
### Base header
| 이름 | 입력 | 필수값 | 설명 |
|:---|:---|:---|:---|
| Accept | `appication/json;charset=UTF-8` | true | |
| Content-Type | `appication/json;charset=UTF-8` | true | |
| Url | `appication/json;charset=UTF-8` | true | |

## Board
### BoardController
### 게시판
#### /main/menu/notice and /main/menu/community etc..
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board | string | true |  | 게시글 고유 번호 |

#### Request HTTP Example:
```css
GET /main/menu/{board_list_nm} HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | Number | true | | 게시판 종류 |
| board_list_nm | string | true | | 게시판 이름 |
| board_title | string | true | | 게시글 제목 |
| board.i_user | Number | true | | 게시글 작성자 고유 번호 |
| board.user_nm | string | true | | 게시글 작성자 이름 |
| m_dt | Date | true | current_timestamp() | 수정 시간 |
| count(i_favorite_board) | Number | true |  | 게시글 좋아요 수 |
| board_hit | Number | true | | 조회수 |

#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "i_board_list" : 2,
   "board_list_nm" : "공지사항",
   "board_title" : "긴급점검 공지",
   "board.i_user" : 1,
   "board.user_nm" : "어드민"
   "m_dt" : "2022-02-16 16:49:06"
   "count(i_favorite_board)" : 35,
   "board_hit" : 216
}
```
<br></br>
### 게시글 작성화면
#### /main/menu/{board_list_nm}/newpost
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | Number | true |  | 게시판 고유 번호 |

#### Request HTTP Example:
```css
GET /main/menu/{board_list_nm}/newpost HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board_list" : 2
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| board_list_nm | string | true | | 게시판 이름 |

#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "board_list_nm" : "공지사항",
}
```
<br></br>
### 게시글 등록
#### /main/menu/{board_list_nm}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | Number | true |  | 게시판 고유 번호 |
| board_title | string | true |  | 게시글 제목 |
| board_ctnt | string | true |  | 게시글 내용 |
| session.i_user | Number | true |  | 사용자 고유 번호 |

#### Request HTTP Example:
```css
POST /main/menu/{board_list_nm} HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board_list" : 2 ,
   "board_title" : "긴급점검 공지" ,
   "board_ctnt" : "서버 문제로 인해 긴급점검 예정입니다." ,
   "session.i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
   "stateCode" : 201,
   "stateMessage" : "Created",
   "resultCode" : "result",
   "message" : "등록완료"
}
```
<br></br>
### 게시글 수정 불러오기
#### /main/menu/{board_list_nm}/{i_board}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board | Number | true |  | 게시글 고유 번호 |
| session.i_user | Number | true |  | 사용자 고유 번호 |

#### Request HTTP Example:
```css
GET /main/menu/{board_list_nm}/{i_board} HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board" : 1,
   "session.i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board| Number | true |  | 게시글 고유 번호 |
| i_board_list | Number | true |  | 게시판 고유 번호 |
| board_list_nm | Number | true |  | 게시판 이름 |
| board_title | string | true |  | 게시글 제목 |
| board_ctnt | string | true |  | 게시글 내용 |

#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "i_board" : 1,
   "i_board_list" : 2,
   "board_list_nm" : "공지사항",
   "board_title" : "긴급점검 공지",
   "board_ctnt" : "서버 문제로 인해 긴금점검 예정입니다."
}
```
<br></br>
### 게시글 수정 등록하기
#### /main/menu/{board_list_nm}/{i_board}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | Number | true |  | 게시판 종류 |
| board_title | string | true |  | 게시글 제목 |
| board_ctnt | string | true |  | 게시글 내용 |
| session.i_user | Number | true |  | 사용자 고유 번호 |

#### Request HTTP Example:
```css
PUT /main/menu/{board_list_nm}/{i_board} HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
  "i_board_list" : 2,
   "board_title" : "긴급점검 공지",
   "board_ctnt" : "서버 문제 긴급점검 완료했습니다.",
   "session.i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |


#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
   "stateCode" : 200,
   "stateMessage" : "OK",
   "resultCode" : "result",
   "message" : "게시글이 수정되었습니다."
}
```
<br></br>
### 게시글 삭제
#### /main/menu/{board_list_nm}/{i_board}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board | Number | true |  | 게시글 고유 번호 |

#### Request HTTP Example:
```css
DELETE /main/menu/{board_list_nm}/{i_board} HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| message | string | true | | 결과 메세지 |

#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "stateCode" : 200,
   "stateMessage" : "OK",
   "message" : "게시글이 삭제되었습니다."
}
```
<br></br>
### 게시글 상세페이지
#### /main/menu/{board_list_nm}/{i_board}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board | Number | true |  | 게시글 고유 번호 |

#### Request HTTP Example:
```css
GET /main/menu/{board_list_nm}/{i_board} HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| board_title | string | true | | 게시글 제목 |
| board_ctnt | string | true | | 게시글 내용 |
| i_board_list | Number | true | | 게시판 고유 번호 |
| board_list_nm | string | true | | 게시판 이름 |
| board_hit| Number | true | | 조회수 |
| m_dt | string | true | current_timestamp() | 수정 시간 |
| board.i_user | Number | true | | 게시글 작성자 고유 번호 |
| board.user_nm | string | true | | 게시글 작성자 이름 |
| count(i_favorite_board) | Number | true | | 게시글 좋아요 수 |
| count(i_board_scrap) | Number | true | | 게시글 스크랩 수 |
| i_cmt | Number | true | | 댓글 고유 번호 |
| cmt.i_user | Number | true | | 댓글 작성자 고유 번호 |
| cmt.user_nm | string | true | | 댓글 작성자 이름 |
| cmt_ctnt | string | true | | 댓글 내용 |
| cmt_id | Number | true | | 메인 댓글 고유 번호 |
| cmt_order | Number | true | | 메인, 서브 댓글 구분 |
| cmt_secret_state | Number | true | | 공개, 비밀 댓글 구분 |
| count(i_favorite_cmt) | Number | true | | 댓글 좋아요 수 |
| session.i_user | Number | true | | 사용자 고유 번호 |


#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "board_title" : "긴급점검 공지",
   "board_ctnt" : "서버문제 긴급점검 완료했습니다",
   "i_board_list" : "2",
   "board_list_nm" : "공지사항",
   "board_hit" : "852",
   "m_dt" : "2022-02-16 18:24:52",
   "board.i_user" : "1",
   "board.user_nm" : "어드민",
   "count(i_favorite_board)" : "20",
   "count(i_board_scrap)" : "100",
   "i_cmt" : "1",
   "cmt.i_user" : "4",
   "cmt.user_nm" : "어드민",
   "cmt_ctnt" : "감사합니다",
   "cmt_id" : "1",
   "cmt_order" : "0",
   "cmt_secret_state" : "0"
   "count(i_favorite_cmt)" : "12"
   "session.i_user" : "1"
}
```

##Cmt
### CmtController
### 댓글 작성
#### /main/menu/{1}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| i_board | Number | true | | 게시글 고유 번호 |
| cmt_ctnt | string | true | | 댓글 내용 |
| cmt_id | Number | true | | 메인 댓글 고유 번호 |
| cmt_order | Number | true | | 메인, 서브 댓글 구분 |
| cmt_secret_state | Number | true | | 공개, 비밀 댓글 구분 |
#### Request HTTP Example:
```css
POST /favoriteBoard HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1,
	"i_board" : 1,
	"cmt_ctnt" : "첫번째 댓글",
	"cmt_id" : 1,
	"cmt_order" : 1,
	"cmt_secret_state" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 201,
	"stateMessage" : "Created"
}
```
<br></br>
### 댓글 삭제
#### /main/menu/{1}
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_cmt | Number | true | | 사용자 고유 번호 |
#### Request HTTP Example:
```css
DELETE /favoriteBoard HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_cmt" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 204 No Content
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 204,
	"stateMessage" : "No Content"
}
```

## Favorite
### FavoriteController
### 게시글 좋아요
#### /favoriteBoard
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| i_board | Number | true | | 게시글 고유 번호 |
#### Request HTTP Example:
```css
POST /favoriteBoard HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1,
	"i_board" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 201,
	"stateMessage" : "Created"
}
```
<br></br>
### 댓글 좋아요
#### /favoriteCmt
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| i_cmt | Number | true | | 댓글 고유 번호 |
#### Request HTTP Example:
```css
POST /favoriteBoard HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1,
	"i_board" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 201,
	"stateMessage" : "Created"
}
```

## Main
### MainController
### 커뮤니티, 공지사항, 주간베스트
#### /main/home
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board | string | true |  | 게시글 고유 번호 |

#### Request HTTP Example:
```css
GET /user/join HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | Number | true | | 게시판 종류 고유 번호 |
| board_list_nm | string | true | | 게시판 이름 |
| board_title | string | true | | 게시글 제목 |
| i_user | Number | true | | 사용자 고유 번호 |
| m_dt | Date | true | current_timestamp() | 수정 시간 |
| favoriteBoard | Number | true |  | 좋아요 수 |


#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "i_board_list" : 2,
   "board_list_nm" : "공지사항",
   "board_title" : "긴급점검 공지",
   "i_user" : 1,
   "m_dt" : "2022-02-16 16:49:06",
   "favoriteBoard" : 35
}
```
<br></br>
### 네비게이션
#### /main/home
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | string | true |  | 게시판 종류 고유 번호 |

#### Request HTTP Example:
```css
GET /main/home HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
   "i_board_list" : 2
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_board_list | Number | true | | 게시판 종류 고유 번호 |
| board_list_nm | string | true | | 게시판 이름 |
| board_id | string | true | | 게시판 종류 |
| board_order | Number | true | | 메인, 서브 게시판 분류 |

#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
   "i_board_list" : 2,
   "board_list_nm" : "공지사항",
   "board_id" : 1,
   "board_order" : 0
}
```

## User
### UserController
### 회원가입
#### /user/join
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| user_id | string | true | email 형식 | 사용자 아이디 |
| user_pw | string | true | bcrypt | 사용자 패스워드 |
| user_chkPw | string | true | | 사용자 패스워드확인 |
| user_nm | string | true | | 사용자 이름 |
| user_phone | string | true | - 없이 작성 | 사용자 전화번호 |
#### Request HTTP Example:
```css
POST /user/join HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"user_id" : "admin@naver.com",
	"user_pw" : "admin1",
	"user_chkPw" : "admin1",
	"user_nm" : "어드민",
	"user_phone" : "01011111111"
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 201,
	"stateMessage" : "Created",
	"resultCode" : "result",
	"message" : "회원가입이 성공하였습니다."
}
```
<br></br>
### 로그인
#### /user/login
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| user_id | string | true | email 형식 | 사용자 아이디 |
| user_pw | string | true | bcrypt | 사용자 패스워드 |
#### Request HTTP Example:
```css
POST /user/login HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"user_id" : "admin@naver.com",
	"user_pw" : "admin1"
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 200,
	"stateMessage" : "OK",
	"resultCode" : "result",
	"message" : "로그인이 성공하였습니다."
}
```
<br></br>
### 아이디 찾기
#### /user/findId
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| user_nm | string | true |  | 사용자 이름 |
| user_ph | string | true | - 없이 작성 | 사용자 전화번호 |
#### Request HTTP Example:
```css
POST /user/fineId HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"user_nm" : "어드민",
	"user_ph" : "01012345678"
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 200,
	"stateMessage" : "OK",
	"resultCode" : "result",
	"message" : "data.result.user_nm 님의 아이디는 data.result.user_id 입니다."
}
```
<br></br>
### 비밀번호 찾기
#### /user/findPw
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| user_nm | string | true |  | 사용자 이름 |
| user_ph | string | true | - 없이 작성 | 사용자 전화번호 |
| user_id | string | true | 이메일 형식 | 사용자 아이디 |
#### Request HTTP Example:
```css
POST /user/findPw HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"user_nm" : "어드민",
	"user_ph" : "01012345678"
	"user_id" : "admin@naver.com"
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 200,
	"stateMessage" : "OK",
	"resultCode" : "result",
	"message" : "이메일의 보안 코드를 확인해주세요."
}
```
<br></br>
### 비밀번호 변경
#### /user/changePw
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true |  | 사용자 고유 번호 |
| newPw | string | true |  | 사용자 새 비밀번호 |
| newChkPw | string | true |  | 사용자 새 비밀번호 확인 |
#### Request HTTP Example:
```css
PATCH /user/changePw HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1,
	"newPw" : "admin2"
	"newChkPw" : "admin2"
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| stateCode | Number | true | | 상태 코드 |
| stateMessage | string | true | | 상태 메세지 |
| resultCode | string | true | | 결과 코드 |
| message | string | true | | 결과 메세지 |
#### Response HTTP Example:
```css
HTTP/1.1 201 Created
Content-Type: application/json;charset-UTF-8
{
	"stateCode" : 201,
	"stateMessage" : "Created",
	"resultCode" : "result",
	"message" : "비밀번호가 변경되었습니다."
}
```
<br></br>
### 회원 정보 페이지
#### /user/myProfile
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true |  | 사용자 고유 번호 |
#### Request HTTP Example:
```css
GET /user/myProfile HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| user_nm | string | true | | 사용자 이름 |
| user_id | string | true | email 형식 | 사용자 아이디 |
| user_pw | string | true | | 사용자 비밀번호 |
| user_phone | string | true | - 없이 작성 | 사용자 전화번호 |
| user_img | string | true | | 사용자 이미지 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"i_user" : 1,
	"user_nm" : "어드민",
	"user_id" : "admin@naver.com",
	"user_pw" : "admin1"
	"user_phone" : "01012345678",
	"user_img" : "img.jpg"
}
```
<br></br>
### 내 글 목록
#### jsp mapping /user/myList
#### /user/myPosts
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true |  | 사용자 고유 번호 |
#### Request HTTP Example:
```css
GET /user/myPosts HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| i_board | Number | true | | 게시글 고유 번호 |
| i_board_list | Number | true |  | 게시판 종류 고유 번호 |
| board_list_nm | string | true | | 게시판 제목 |
| board_title | string | true | | 게시글 제목 |
| board_hit | string | true | | 게시글 조회수 |
| m_dt | Date | true | current_timestamp() | 수정 시간 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"i_user" : 1,
	"i_board" : 1,
	"i_board_list" : 1,
	"board_list_nm" : "공지사항",
	"board_title" : "테스트 공지사항입니다."
	"board_hit" : 4,
	"m_dt" : "2021-11-16 16:37:36"
}
```
<br></br>
### 실전 기록
#### jsp mapping /user/myList
#### /user/records
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true |  | 사용자 고유 번호 |
#### Request HTTP Example:
```css
GET /user/records HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| i_score | Number | true | | 점수 고유 번호 |
| music_score | Number | true |  | 점수 기록 |
| r_dt | string | true | current_timestamp() | 작성 시간 |
| i_music | Number | true | | 음악 고유 번호 |
| music_title | string | true | | 음악 제목 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"i_user" : 1,
	"i_score" : 1,
	"music_score" : 1,
	"r_dt" : "2021-11-16 16:37:36",
	"i_music" : 1,
	"music_title" : "TOMBOY"
}
```
<br></br>
### 스크랩
#### jsp mapping /user/myList
#### /user/storage
### Request
#### Request Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true |  | 사용자 고유 번호 |
#### Request HTTP Example:
```css
GET /user/storage HTTP/1.1
Content-Type: application/json;charset-UTF-8
Accept: application/json;charset-UTF-8
Host: localhost
{
	"i_user" : 1
}
```
### Response
#### Response Field:
| 필드명 | 타입 | 필수값 | 양식 | 설명 |
|:---|:---|:---|:---| :--- |
| i_user | Number | true | | 사용자 고유 번호 |
| board.i_user | Number | true | | 게시글 작성자 고유 번호 |
| board.user_nm | string | true | | 게시글 작성자 이름 |
| i_board | Number | true | | 게시글 고유 번호 |
| board_title | Number | true |  | 게시글 제목|
| m_dt | string | true | current_timestamp() | 수정 시간 |
| board_hit | string | true | | 게시글 조회수 |
| count(i_favorite_board) | Number | true | | 게시글 좋아요 수 |
| count(i_board_cmt) | Number | true | | 게시글 댓글 수 |
#### Response HTTP Example:
```css
HTTP/1.1 200 OK
Content-Type: application/json;charset-UTF-8
{
	"i_user" : 1,
	"board.i_user" : 1,
	"board.user_nm" : "어드민",
	"i_board" : 1,
	"board_title" : "공지사항입니다.",
	"m_dt" : "2021-11-16 16:37:36"
	"board_hit" : 1,
	"count(i_favorite_board)" : 1,
	"count(i_board_cmt)" : 1
}
```
