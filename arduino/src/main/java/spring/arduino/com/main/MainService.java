package spring.arduino.com.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.arduino.com.DTO.BoardDTO;

@Service
public class MainService {
	
	@Autowired
	private MainMapper mapper;

	public int insBoardProc(BoardDTO dto) {
		
		if(dto.getBoard_title().equals("")) {
			return 2;
		} 
		
		if(dto.getBoard_ctnt().equals("") || dto.getBoard_ctnt().length() < 10) {
			return 3;
		}
		
		return mapper.insBoardProc(dto);
	}
}


