package spring.arduino.com.serial;

import java.io.IOException;
import java.io.InputStream;

//	값을 읽는 클래스로, 이는 Thread로 구현해야 한다.
public class SerialRead implements Runnable
{
	InputStream in;
	
	public SerialRead(InputStream in){this.in = in;}
	
	@Override
	public void run() 
	{
		byte[] buffer = new byte[1024];
		int len = -1;
		
		try 
		{
			//	buffer에 저장하고나서, 그 길이를 반환한다.
			while ((len = this.in.read(buffer)) > -1)
			{
				//	System.out.println(new String(buffer,0,len));
				//	new DataProc(new String(buffer,0,len));
				String s = new String(buffer,0,len);
				
				if (len != 0) 
					new DataProc(s);
			}
		} 
		catch (IOException e) {e.printStackTrace();}
	}
}