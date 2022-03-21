package spring.arduino.com.main;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import spring.arduino.com.DTO.BoardDTO;
import spring.arduino.com.DTO.UserDTO;
import spring.arduino.com.domain.UserDomain;

@Mapper
public interface MainMapper {
	int insBoardProc(BoardDTO dto);
}
