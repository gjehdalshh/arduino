import java.util.Scanner;

public class test {

	public static void main(String[] args) {
		String users[][] = {
				{"sonbh","9815"},
				{"song","1057"},
				{"soso","1234"}
							};
		Scanner sc = new Scanner(System.in);
		System.out.print("ID를 입력하세용 ~ ");
		String inputId = sc.next();
		System.out.print("PW를 입력하세용 ~ ");
		String inputPass= sc.next();

		boolean isLogined = false;
		for(int i=0;i<users.length;i++) {
			String CurrentId = users[i][0];
			String CurrentPw = users[i][1];
			
			if(CurrentId.equals(inputId) && CurrentPw.equals(inputPass)) {
				System.out.println("aa");
					isLogined = true;
				}
				else
				{
					System.out.println("bb");
					isLogined = false;
				}
			}
		
		System.out.println(isLogined);
		if(isLogined) {
			System.out.println("Master!");
		}
		else {
			System.out.println("Who are you");
			
		}
		
sc.close();
		
		
	}


}
