package spring.arduino.com.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class BoardListEntity {
	
	private int i_Board_list;
	private String board_list_nm;
	
	public int getI_Board_list() {
		return i_Board_list;
	}
	public void setI_Board_list(int i_Board_list) {
		this.i_Board_list = i_Board_list;
	}
	public String getBoard_list_nm() {
		return board_list_nm;
	}
	public void setBoard_list_nm(String board_list_nm) {
		this.board_list_nm = board_list_nm;
	}

}
