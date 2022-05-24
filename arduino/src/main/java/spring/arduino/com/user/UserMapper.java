package spring.arduino.com.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import spring.arduino.com.DTO.ScoreInfoDTO;
import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.ScoreInfoDomain;
import spring.arduino.com.domain.UserDomain;

@Mapper
public interface UserMapper {
	int ins_user(UserDTO dto);
	UserDomain selUser(UserDTO dto);
	UserDomain findId(UserDTO dto);
	UserDomain findPw(UserDTO dto);
	int changePw(UserDTO dto);
	List<ScoreInfoDomain> showMyActualModeRecord(UserDomain domain);
}
