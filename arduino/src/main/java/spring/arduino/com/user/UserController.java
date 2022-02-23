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
	
	@Autowired
	private UserService service;
	
	@GetMapping("/user/login")
	public void login() {}
	
	@ResponseBody
	@PostMapping("/user/loginProc")
	public Map<String, Object> loginProc(@RequestBody UserDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.loginProc(dto));
		return val;
	}
	
	@GetMapping("/user/join")
	public void join() {}
	
	@ResponseBody
	@PostMapping("/user/joinProc")
	public Map<String, Object> join(@RequestBody UserDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.ins_user(dto));
		
		return val;
	}
	
	@GetMapping("/user/findInfo")
	public void findInfo() {}
	
	@ResponseBody
	@PostMapping("/user/findInfo")
	public Map<String, Object> findInfo(Model model, @RequestBody UserDTO dto){
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.findInfo(dto));	

		return val;
	}
	
	@ResponseBody
	@PostMapping("/user/findPw")
	public Map<String, Object> findPw(Model model, @RequestBody UserDTO dto){
		Map<String, Object> val = new HashMap<String, Object>();
		
		UserDomain vo = service.findPassword(dto);
		
		val.put("result", vo);
		
		if(!vo.getUser_id().equals("error")) {
			//val.put("pincode", service.randomNum());
			service.sendMail(dto);
		}
		
		return val;
	}
	
	
	
	
}




