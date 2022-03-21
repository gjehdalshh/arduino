package spring.arduino.com.model;

public class ScoreInfoEntity {
	private int i_score;
	private int i_user;
	private int i_music;
	private int music_socre;
	private String r_dt;
	public int getI_score() {
		return i_score;
	}
	public void setI_score(int i_score) {
		this.i_score = i_score;
	}
	public int getI_user() {
		return i_user;
	}
	public void setI_user(int i_user) {
		this.i_user = i_user;
	}
	public int getI_music() {
		return i_music;
	}
	public void setI_music(int i_music) {
		this.i_music = i_music;
	}
	public int getMusic_socre() {
		return music_socre;
	}
	public void setMusic_socre(int music_socre) {
		this.music_socre = music_socre;
	}
	public String getR_dt() {
		return r_dt;
	}
	public void setR_dt(String r_dt) {
		this.r_dt = r_dt;
	}
}
