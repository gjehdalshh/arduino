package com.arduino.join;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.arduino.com.DTO.UserDTO;

@Service
public class JoinService {
	
	@Autowired
	JoinConditionValidator validator;
	
	public int joinNewUser(UserDTO dto) {
		
		return validator.verifier(dto);
	}
}

