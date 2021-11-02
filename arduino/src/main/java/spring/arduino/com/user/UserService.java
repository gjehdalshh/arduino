package spring.arduino.com.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UserService {

	@Autowired
	private UserMapper mapper;
	
	public String login() {
		
		return "";
	}
	
}
