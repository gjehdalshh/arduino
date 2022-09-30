package spring.arduino.com.model;

import org.springframework.format.annotation.DateTimeFormat;

public class ScoreInfoEntity {
	private int i_score_record;
	private int i_user;
	private int actual_mode_score;
	private String r_dt;
	private int octave;
	private String score_level;
	public int getOctave() {
		return octave;
	}
	public void setOctave(int octave) {
		this.octave = octave;
	}
	public String getScore_level() {
		return score_level;
	}
	public void setScore_level(String score_level) {
		this.score_level = score_level;
	}
	public int getI_score_record() {
		return i_score_record;
	}
	public void setI_score_record(int i_score_record) {
		this.i_score_record = i_score_record;
	}
	public int getI_user() {
		return i_user;
	}
	public void setI_user(int i_user) {
		this.i_user = i_user;
	}
	public int getActual_mode_score() {
		return actual_mode_score;
	}
	public void setActual_mode_score(int actual_mode_score) {
		this.actual_mode_score = actual_mode_score;
	}
	public String getR_dt() {
		return r_dt;
	}
	public void setR_dt(String r_dt) {
		this.r_dt = r_dt;
	}
}
