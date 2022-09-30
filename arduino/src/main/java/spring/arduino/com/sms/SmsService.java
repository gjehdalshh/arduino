package spring.arduino.com.sms;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.ScoreInfoDomain;
import spring.arduino.com.domain.UserDomain;

@Service
public class SmsService {
	
	@Autowired
	SmsMapper mapper;
	
	@Value("${API_KEY}")
	private String API_KEY;
	
	@Value("${API_SECRET}")
	private String API_SECRET;
	
	public ScoreInfoDomain selUserRank() {
		return mapper.selUserRank();
	}
	
	public int pushedRanking(UserDTO dto) {
		UserDomain vo = mapper.pushedRanking(dto);

		Message coolsms = new Message(API_KEY, API_SECRET);

		HashMap<String, String> sms = new HashMap<String, String>();

		sms.put("to", vo.getUser_phone());
		sms.put("from", "01027576511");
		sms.put("type", "SMS");
		sms.put("text", "등수에서 밀려났습니다. 다시 도전해보세요!");
	
		try {
			coolsms.send(sms);
			return 1;
		} catch (CoolsmsException e) {
			System.out.println(e.getMessage());
			System.out.println(e.getCode());
			return 2;
		}
	}
}
