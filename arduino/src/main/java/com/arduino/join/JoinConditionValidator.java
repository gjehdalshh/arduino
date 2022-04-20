package com.arduino.join;

import org.springframework.beans.factory.annotation.Autowired;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

public class JoinConditionValidator {

	@Autowired
	JoinRepository joinRepo;
	
	@Autowired
	JoinPassword password;
	

	public int verifier(UserDTO dto) {
		
		if (verifierEmailForm(dto)) { // 이메일 양식 확인
			if (joinRepo.checkExistenceId(dto) != null) { // 아이디 존재 여부 확인
				return 2;
			}
		} else {
			return 3;
		}
		
		if(password.comparePassword(dto)) { // 비밀빈호, 비밀번호 확인 비교
			password.encrypt();
		} else {
			return 4;
		}
		
		if (!velifierNameLength(dto)) { // 이름 길이 확인
			return 5;
		}
		if (verifierPhoneNumberForm(dto)) { // 휴대폰 번호 양식 확인
			if(joinRepo.checkExistencePhoneNumber() != null) { // 휴대폰 번호 존재 여부 확인
				return 7;
			}
		} else {
			return 6;
		}
		
		joinRepo.insUser(dto);
		
		return 1;
	}

	private boolean verifierEmailForm(UserDTO dto) {
		return dto.getUser_id().contains("@") && dto.getUser_id().contains(".");
	}

	private boolean velifierNameLength(UserDTO dto) {
		return dto.getUser_nm().length() <= 4;
	}
	private boolean verifierPhoneNumberForm(UserDTO dto) {
		String reg = "^[0-9]*$";
		String parsePh = dto.getUser_phone().substring(0, 3);
		
		return (dto.getUser_phone().matches(reg) && parsePh.equals("010")
				&& dto.getUser_phone().length() == 11);
	}
}





