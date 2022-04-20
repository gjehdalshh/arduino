package spring.arduino.com.serial;

import org.springframework.stereotype.Service;

@Service
public class SerialService {
	
	public int test() {
		try {	
			(new Serial()).connect("COM3");
		}
		catch(Exception e) 
		{
			e.printStackTrace();
		}
		return 1;
	}
}
