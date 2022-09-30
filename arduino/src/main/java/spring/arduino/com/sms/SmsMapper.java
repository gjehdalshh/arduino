package spring.arduino.com.sms;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.ScoreInfoDomain;
import spring.arduino.com.domain.UserDomain;

public interface SmsMapper {
	ScoreInfoDomain selUserRank();
	UserDomain pushedRanking(UserDTO dto);
}
