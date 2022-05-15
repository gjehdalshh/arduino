package spring.arduino.com.serial;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.domain.ScoreInfoDomain;

@Service
public class SerialService {
	
	@Autowired
	SerialMapper mapper;
	
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
	
	int recordScore (ScoreInfoDTO dto) {
		return mapper.recordScore(dto);
	}
	
	List<ScoreInfoDomain> showRank() {
		return mapper.showRank();
	}
	
	ScoreInfoDomain showMyBestScore(ScoreInfoDTO dto) {
		return mapper.showMyBestScore(dto);
	}
	
	List<ScoreInfoDomain> showMyRank() {
		return mapper.showMyRank();
	}
	
}
