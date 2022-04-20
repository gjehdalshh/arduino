package spring.arduino.com.user;

import java.lang.ProcessBuilder.Redirect;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

@Controller
public class UserController {
	
	final String FIND_ID = "findUserId";
	final String FIND_PW = "findUserPw";
	Double a;
	
	@Autowired
	private UserService service;
	
	/* ---------------- 로그인 페이지 열기 ---------------- */
	
	@GetMapping("/user/login")
	public void login() {
		
	}
	
	
	
	/* ---------------- 로그인 ajax ---------------- */
	
	@ResponseBody
	@PostMapping("/user/loginProc")
	public Map<String, Object> loginProc(@RequestBody UserDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.loginProc(dto));
		return val;
	}
	
	/* ---------------- 회원가입 페이지 열기 ---------------- */
	
	@GetMapping("/user/join")
	public void join() {}
	
	/* ---------------- 회원가입 ajax ---------------- */
	
	@ResponseBody
	@PostMapping("/user/joinProc")
	public Map<String, Object> join(@RequestBody UserDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.ins_user(dto));
		
		return val;
	}
	
	/* ---------------- 회원정보 찾기 페이지 열기 ---------------- */
	
	@GetMapping("/user/findInfo")
	public void findInfo() {}
	
	/* --------------- 아이디 찾기 ajax ----------------*/
	
	@ResponseBody
	@PostMapping("/user/findId")
	public Map<String, Object> findId(@RequestBody UserDTO dto){
		Map<String, Object> val = service.findInfo(dto, FIND_ID);

		return val;
	}
	
	/* --------------- 비밀번호 찾기 ajax ---------------- */
	
	@ResponseBody
	@PostMapping("/user/findPw")
	public Map<String, Object> findPw(@RequestBody UserDTO dto){
		Map<String, Object> val = service.findInfo(dto, FIND_PW);
		
		return val;
	}
	
	/* --------------- 비밀번호 변경 ajax ----------------- */
	
	@ResponseBody
	@PostMapping("/user/changePw")
	public Map<String, Object> changPw(@RequestBody UserDTO dto){
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.changePw(dto));
		
		return val;
		
	}
}




