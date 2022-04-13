package com.arduino.join;

import spring.arduino.com.DTO.UserDTO;

public class JoinPassword {
	
	public boolean comparePassword(UserDTO dto) {
		return (dto.getUser_pw().equals(dto.getUser_chkPw()));
	}
	
	public void encrypt() {
		// 암호화 작업
	}
}
