package spring.arduino.com.domain;

import spring.arduino.com.model.ScoreInfoEntity;

public class ScoreInfoDomain extends ScoreInfoEntity{
	String user_nm;
	String user_phone;
	int my_rank;
	public int getMy_rank() {
		return my_rank;
	}
	public void setMy_rank(int my_rank) {
		this.my_rank = my_rank;
	}
	public String getUser_nm() {
		return user_nm;
	}
	public void setUser_nm(String user_nm) {
		this.user_nm = user_nm;
	}
	public String getUser_phone() {
		return user_phone;
	}
	public void setUser_phone(String user_phone) {
		this.user_phone = user_phone;
	}
}
