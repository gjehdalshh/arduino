package spring.arduino.com.serial;

import java.util.List;

import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.domain.ScoreInfoDomain;

public interface SerialMapper {
	int recordScore(ScoreInfoDTO dto);
	List<ScoreInfoDomain> showRank();
	ScoreInfoDomain showMyBestScore(ScoreInfoDTO dto);
	List<ScoreInfoDomain> showMyRank();
}
