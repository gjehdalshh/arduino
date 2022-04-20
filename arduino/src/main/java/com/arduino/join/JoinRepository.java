package com.arduino.join;

import org.springframework.stereotype.Repository;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

@Repository
public interface JoinRepository {
	UserDomain insUser(UserDTO dto);
	UserDomain checkExistenceId(UserDTO dto);
	UserDomain checkExistencePhoneNumber();
}
