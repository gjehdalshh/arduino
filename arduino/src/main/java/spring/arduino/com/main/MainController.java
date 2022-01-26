package spring.arduino.com.main;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import spring.arduino.com.DTO.BoardDTO;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@GetMapping("/main/home")
	public void test() {}
	
	@GetMapping("/main/insBoard")
	public void insBoard() {}
	
	@ResponseBody
	@PostMapping("/main/insBoard")
	public Map<String, Object> insBoardProc(@RequestBody BoardDTO dto) {
		Map<String, Object> val = new HashMap<String, Object>();
		
		val.put("result", service.insBoardProc(dto));
		return val;
	}
	
}
