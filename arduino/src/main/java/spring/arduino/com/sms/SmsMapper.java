package spring.arduino.com.sms;

import org.apache.ibatis.annotations.Mapper;

import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.ScoreInfoDomain;
import spring.arduino.com.domain.UserDomain;

@Mapper
public interface SmsMapper {
	ScoreInfoDomain selUserRank();
	UserDomain pushedRanking(UserDTO dto);
}
