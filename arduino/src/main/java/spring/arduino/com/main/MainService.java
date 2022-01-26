package spring.arduino.com.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.arduino.com.DTO.BoardDTO;

@Service
public class MainService {
	
	@Autowired
	private MainMapper mapper;

	public int insBoardProc(BoardDTO dto) {
		return mapper.insBoardProc(dto);
	}
}


