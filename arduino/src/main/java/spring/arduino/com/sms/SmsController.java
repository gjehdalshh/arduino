package spring.arduino.com.sms;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.DTO.UserDTO;

@Controller
public class SmsController {
	
	@Autowired
	SmsService service;
	
	@ResponseBody
	@PostMapping("/sms/selectUserRank")
	public Map<String, Object> selUserRank() {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.selUserRank());
		
		return val;
	}
	
	@ResponseBody
	@PostMapping("/sms/send")
	public Map<String, Object> smsSend(@RequestBody UserDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		val.put("result", service.pushedRanking(dto));
		
		return val;
	}
}
