package spring.arduino.com.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
	String login();
}
