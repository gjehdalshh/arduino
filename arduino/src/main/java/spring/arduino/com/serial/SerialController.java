package spring.arduino.com.serial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.domain.ScoreInfoDomain;

@Controller
public class SerialController extends HttpServlet {
	
	@Autowired
	SerialService service;
	
	private static final long serialVersionUID = 1L;

	public void init(ServletConfig config) throws ServletException {
	}
	
	public int value;
    
	@GetMapping("/serial/practice")
	protected void serialProc(HttpServletRequest request) {
		
		String data = request.getParameter("data");
		System.out.println("data : "+data);
		value = Integer.parseInt(data);
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


	@GetMapping("/serial/actualMode")
	public void actualMode() {}
	
	@ResponseBody
	@PostMapping("/serial/actualMode")
	public Map<String, Object> actualModeProc() {
		
		Map<String, Object> val = new HashMap<String, Object>();
		
		value =(int)(Math.random()*12 + 1);
		
		val.put("data", value);
		
		return val;
	}
	
	@ResponseBody
	@PostMapping("/serial/recordScore")
	public Map<String, Object> recordScore(@RequestBody ScoreInfoDTO dto) {
		Map<String, Object> val = new HashMap<String, Object> ();
		
		val.put("data", service.recordScore(dto));
		
		return val;
	}
	
	@ResponseBody
	@PostMapping("/serial/showRank")
	public List<ScoreInfoDomain> showRank() {
		return service.showRank();
	}
	
	@ResponseBody
	@PostMapping("/serial/showMyBestScore")
	public Map<String, Object> showMyRank(@RequestBody ScoreInfoDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("data", service.showMyBestScore(dto));
		
		return val;
	}
	
	@ResponseBody
	@PostMapping("/serial/showMyRank")
	public List<ScoreInfoDomain> showMyRank() {
		return service.showMyRank();
	}
}

