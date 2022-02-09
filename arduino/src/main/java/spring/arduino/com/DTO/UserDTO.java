package spring.arduino.com.DTO;

import spring.arduino.com.model.UserEntity;

public class UserDTO extends UserEntity{
	private String user_chkPw;

	public String getUser_chkPw() {
		return user_chkPw;
	}

	public void setUser_chkPw(String user_chkPw) {
		this.user_chkPw = user_chkPw;
	}
	
	
}
