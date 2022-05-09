package spring.arduino.com.serial;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/*
	아두이노가 데이터(0~9) 전송하고 자바가 이를 수신해서
	웹 상으로 전송하려는 것
	
	자바에서 http URL 요청으로 웹에 보낸다.
	보낼 data가 9라고 한다면 
	http://localhost.9090/serialdata?data=9로 실어서 보낸다
	데이터를 보낼 때, 위의 URL을 보내서 data값만 받아서 처리하면
	가장 쉬울 듯하다.
	
	SerialRead 클래스가 데이터를 읽어오는 클래스이다.
	
	서버를 실행하면 "접속" 이라고 뜬다.
*/

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
				System.out.println("len : "+len);
				//String s = new String(buffer,0,len);
				//System.out.println("len : "+len);
				int s  = buffer[0];
				
				HttpURLConnection conn = null;
				System.out.println("s : "+s);
				
				//	들어온 데이터가 있는 경우에만 동작을 한다.
				if (len != 0) 
				{
					//	데이터를 url 형태로 변형시킨다. s가 데이터이다.	
					String targetURL = "http://localhost:8090/serial/practice?data="+s;
					URL url = new URL(targetURL);	//	URL은 String클래스와 비슷하나, 파싱까지 해준다.
					
					try 
					{
						//	http에 접속
						conn = (HttpURLConnection) url.openConnection();	//	소켓을 열겠다는 요청
						
						//	스트림을 통해 데이터를 받는다.
						BufferedReader br = new BufferedReader(
								new InputStreamReader(conn.getInputStream()));
						
						while ((br.readLine()) != null) {}
						
						br.close();
						conn.disconnect();
					}
					catch(Exception e) {}
				}
			}
		} 
		catch (IOException e) {e.printStackTrace();}
	}
}