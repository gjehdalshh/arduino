package spring.arduino.com.user;

import org.apache.ibatis.annotations.Mapper;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

@Mapper
public interface UserMapper {
	void ins_user(UserDTO dto);
	UserDomain selUser(UserDTO dto);
	int loginProc(UserDTO dto);
}
