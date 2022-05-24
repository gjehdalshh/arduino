package spring.arduino.com.user;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;

import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.BoardDomain;
import spring.arduino.com.domain.ScoreInfoDomain;
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
	
	public Map<String, Object> findInfo(UserDTO dto, String pageClassification){
		Map<String, Object> val = new HashMap<String, Object>();
		
		UserDomain vo = null;
		
		if(pageClassification.equals("findUserId")) {
			vo = mapper.findId(dto);
		} else if (pageClassification.equals("findUserPw")) {
			vo = mapper.findPw(dto);
		}
		
		if (vo != null) {
			val.put("result", vo);
			if(pageClassification.equals("findUserPw")) {
				int pinCode = createRandomPincode();
				sendMail(dto, pinCode);
				val.put("pinCode", pinCode);
			}
		} else {
			val.put("result", "error");
		}
		
		return val;
	}

	public int createRandomPincode() {
	
			Random r = new Random();
			return r.nextInt(999999);

	}
	
	public void sendMail(UserDTO dto, int pinCode) {
		
		String setFrom = "gjehdalshh@naver.com";
		// 보내는 주소 이름을 바꿀순 없을까..?!
		String toMail = dto.getUser_id();
		String title = "[너목보]";
		String content = pinCode + "";
		
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
	
	public int changePw(UserDTO dto) {
		
		 dto.setNewPw(bcrypt.encode(dto.getNewPw()));
		 
		 return mapper.changePw(dto);		
	}

	public List<ScoreInfoDomain> showMyActualModeRecord(UserDomain domain) {
		return mapper.showMyActualModeRecord(domain);
	}
	
	public List<BoardDomain> showMyBoardList(UserDomain domain) {
		return mapper.showMyBoardList(domain);
	}
}
