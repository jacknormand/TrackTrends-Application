package com.jackynorm.tracktrends.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "topperformances")
public class Performance {

	@Id
	@Column (name = "entryid")
	public Integer entryid;

	@Column(name = "event")
	public String event;

	@Column(name = "rank")
	public Integer rank;

	@Column(name = "gender")
	public String gender;

	@Column(name = "athlete")
	public String athlete;

	@Column(name = "team")
	public String team;

	@Column(name = "result")
	public Double result;

	@Column(name = "meet")
	public String meet;

	@Column(name = "season")
	public String season;

	@Column(name = "meetdate")
	public LocalDate date;


}


