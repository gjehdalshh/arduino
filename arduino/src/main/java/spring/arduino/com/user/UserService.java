package spring.arduino.com.user;

import java.util.Random;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.config.method.MethodSecurityMetadataSourceBeanDefinitionParser;
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
	
	@Autowired
	private JavaMailSender mailSender;
	
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
	
	public UserDomain findPassword(UserDTO dto) {
		
		UserDomain vo = mapper.findPassword(dto);
		
		if(vo == null) {
			UserDomain emptyVo = new UserDomain();
			emptyVo.setUser_id("error");
			return emptyVo;
		}
		return vo;
	}
	
	public int randomNum() {
	
			Random r = new Random();
			int num = r.nextInt(999999);
			return num;
	}
	
	public void sendMail(UserDTO dto) {
		
		String setFrom = "smdf01726@naver.com";
		String toMail = dto.getUser_id();
		String title = "[너목보]";
		String content = "123456";
		
		try {
			MimeMessage message = mailSender.createMimeMessage();
			
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
			
			messageHelper.setFrom(setFrom);
			messageHelper.setTo(toMail);
			messageHelper.setSubject(title);
			messageHelper.setText(content);
			mailSender.send(message);
		}catch(Exception e) {
			System.out.println(e);
		}
	}
}
