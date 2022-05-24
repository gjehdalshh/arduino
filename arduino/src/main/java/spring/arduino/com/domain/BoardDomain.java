package spring.arduino.com.domain;

import spring.arduino.com.model.BoardEntity;

public class BoardDomain extends BoardEntity{
	String board_list_nm;

	public String getBoard_list_nm() {
		return board_list_nm;
	}

	public void setBoard_list_nm(String board_list_nm) {
		this.board_list_nm = board_list_nm;
	}
}
