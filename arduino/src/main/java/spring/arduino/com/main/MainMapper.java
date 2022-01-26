package spring.arduino.com.main;

import org.apache.ibatis.annotations.Mapper;

import spring.arduino.com.DTO.BoardDTO;

@Mapper
public interface MainMapper {
	int insBoardProc(BoardDTO dto);
}
