package com.arduino.domain.user.service;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;
import spring.arduino.com.user.UserMapper;

@Controller
public class LoginAndJoinService {
	@Autowired
	private UserMapper mapper;
	
	@Autowired
	private HttpSession hs;
	
	@Autowired
	private BCryptPasswordEncoder bcrypt;
	
	@Autowired
	private JavaMailSender mailSender;
	
	public int ins_user(UserDTO dto) {
		
		UserDomain vo = mapper.selUser(dto);
		
		if(vo != null) {
			return 2;
		}
		
		if(!dto.getUser_id().contains("@") && !dto.getUser_id().contains(".")) {
			return 3;
		}
		
		if(!dto.getUser_pw().equals(dto.getUser_chkPw())) {
			return 4;
		}
		
		if(dto.getUser_nm().length()>4) {
			return 5;
		}

		String reg = "^[0-9]*$";
		String parsePh = dto.getUser_phone().substring(0, 3);
		
		if(!dto.getUser_phone().matches(reg) || !parsePh.equals("010") || dto.getUser_phone().length() != 11) {
			return 6;
		}
		
		dto.setUser_pw(bcrypt.encode(dto.getUser_pw()));
		
		return mapper.ins_user(dto);
	}
	
	public int loginProc(UserDTO dto) {
		
		UserDomain vo =  mapper.selUser(dto);
		
		if(vo == null) {
			return 2;
		}
		
		if(!bcrypt.matches(dto.getUser_pw(), vo.getUser_pw())) {
			return 3;
		}
		
		hs.setAttribute("user", vo);
		
		return 1;
	}
}
