package com.example.demo.dto;

import java.io.Serial;
import java.io.Serializable;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class InvesterDTO implements Serializable{

	@Serial
	private static final long serialVersionUID = 7916122193771477568L;

	private Integer id;

	@NotNull
	private String name;

	@NotNull
	private String email;
	
	@NotNull
	private RangeInvesterDTO idInvesterRange;
	
	@NotNull
	private BusinessSectorDTO idBussinesSector;
	
	@NotNull
	private Integer idStartUpState;

}
