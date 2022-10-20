package com.example.demo.dto;

import java.util.Date;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class StartupDTO {

	private Integer id;

	@NotNull
	private String name;

	@NotNull
	private String email;

	@NotNull
	private String description;

	@NotNull
	private BusinessSectorDTO idBusinessSector;

	@NotNull
	private StartupStateDTO idStartupState;

	@NotNull
	private Integer anualInvoicing;

	@NotNull
	private Date fundationYear;

	@NotNull
	private EntrepreneurDTO idEntrepreneur;

}
