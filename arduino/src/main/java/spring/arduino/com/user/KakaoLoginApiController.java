package spring.arduino.com.user;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import spring.arduino.com.domain.UserDomain;

@Controller
public class KakaoLoginApiController {
	@Autowired
	KakaoLoginApiService service;
	
	@Autowired
	private HttpSession hs;
	
	/* --------------- 카카오톡 로그인 --------------- */
	@RequestMapping("/user/kakao/login")
	public String login(@RequestParam(value = "code", required = false) String code) throws Exception {
		System.out.println("#########" + code);

		// 위에서 만든 코드 아래에 코드 추가
		String access_Token = service.getAccessToken(code);
		System.out.println("###access_Token#### : " + access_Token);
		
		HashMap<String, Object> userInfo = service.getUserInfo(access_Token);
		System.out.println("###access_Token#### : " + access_Token);
		System.out.println("###nickname#### : " + userInfo.get("nickname"));
		System.out.println("###email#### : " + userInfo.get("email"));
		UserDomain vo = new UserDomain();
		vo.setUser_nm((String)userInfo.get("nickname"));
		vo.setUser_id((String)userInfo.get("email"));
		hs.setAttribute("user", vo);
		hs.setAttribute("kakaoToken", access_Token);
		
		return "redirect:/main/home";
	}
}
