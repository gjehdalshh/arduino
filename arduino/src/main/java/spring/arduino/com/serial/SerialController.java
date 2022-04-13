package spring.arduino.com.serial;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SerialController {
	
	@GetMapping("/serial/practiceMode")
	public void practiceTest() {
		try {	
			(new Serial()).connect("COM3");
		}
		catch(Exception e) 
		{
			e.printStackTrace();
		}
	}
}
