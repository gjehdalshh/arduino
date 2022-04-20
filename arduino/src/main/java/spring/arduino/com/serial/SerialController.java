package spring.arduino.com.serial;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SerialController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config) throws ServletException {
	}
	
	public String value;
    
	@GetMapping("/serial/practice")
	protected void serialProc(HttpServletRequest request) {
		
		String data = request.getParameter("data");
		value = data;
	}
	
	@GetMapping("/serial/practiceMode")
	public void practiceMode() {}
	
	@ResponseBody
	@PostMapping("/serial/practiceMode")
	public Map<String, Object> practiceModeProc() {
		Map<String, Object> val = new HashMap<String, Object>();

		val.put("data", value);
		return val;
	}
}
