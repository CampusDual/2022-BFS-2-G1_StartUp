package com.example.demo.dto;

import java.util.Date;

import javax.validation.constraints.NotNull;

import com.example.demo.entity.BusinessSector;
import com.example.demo.entity.Entrepreneur;
import com.example.demo.entity.StartupState;

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
	private BusinessSector idBussinesSector;

	@NotNull
	private StartupState idStartupState;

	@NotNull
	private Integer anualInvoicing;

	@NotNull
	private Date fundationYear;

	@NotNull
	private Entrepreneur idEntrepreneur;

}
