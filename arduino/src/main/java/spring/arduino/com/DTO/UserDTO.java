package spring.arduino.com.DTO;

import spring.arduino.com.model.UserEntity;

public class UserDTO extends UserEntity{
	private String user_chkPw;
	private String modifyName;
	private String modifyPhone;
	private String newPw;
	private String id;


	public String getModifyPhone() {
		return modifyPhone;
	}

	public void setModifyPhone(String modifyPhone) {
		this.modifyPhone = modifyPhone;
	}

	public String getModifyName() {
		return modifyName;
	}

	public void setModifyName(String modifyName) {
		this.modifyName = modifyName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNewPw() {
		return newPw;
	}

	public void setNewPw(String newPw) {
		this.newPw = newPw;
	}

	public String getUser_chkPw() {
		return user_chkPw;
	}

	public void setUser_chkPw(String user_chkPw) {
		this.user_chkPw = user_chkPw;
	}
	
	
}
