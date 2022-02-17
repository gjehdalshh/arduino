package spring.arduino.com.user;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

@Controller
public class UserService {

	@Autowired
	private UserMapper mapper;
	
	@Autowired
	private HttpSession hs;
	
	@Autowired
	private BCryptPasswordEncoder bcrypt;
	
	public int ins_user(UserDTO dto) {
		
		UserDomain vo = mapper.selUser(dto);
		UserDomain selNick = mapper.selNick(dto);
		
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
		
		if (selNick != null) {
			return 6;
		}
		
		if(dto.getUser_nick().length()>20) {
			return 7;
		}
		
		String reg = "^[0-9]*$";
		String parsePh = dto.getUser_phone().substring(0, 3);
		
		if(!dto.getUser_phone().matches(reg) || !parsePh.equals("010") || dto.getUser_phone().length() != 11) {
			return 8;
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
	
	public UserDomain findInfo(UserDTO dto) {
		
		UserDomain vo = mapper.findInfo(dto);
		
		if(vo == null) {
			UserDomain emptyVo = new UserDomain();
			emptyVo.setUser_id("error");
			return emptyVo;
		}
		return vo;
	}
	
	public String findId(UserDTO dto) {
		
		UserDomain vo = mapper.findInfo(dto);
		return vo.getUser_id();
	}
	
}
