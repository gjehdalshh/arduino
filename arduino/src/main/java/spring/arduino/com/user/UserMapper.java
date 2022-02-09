package spring.arduino.com.user;

import org.apache.ibatis.annotations.Mapper;

import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

@Mapper
public interface UserMapper {
	int ins_user(UserDTO dto);
	UserDomain selUser(UserDTO dto);
	UserDomain selNick(UserDTO dto);
	UserDomain findInfo(UserDTO dto);
}
