package com.example.demo.dto;

import java.io.Serial;
import java.io.Serializable;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.example.demo.entity.BusinessSector;
import com.example.demo.entity.RangeInvester;

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
	private RangeInvester idInvesterRange;
	
	@NotNull
	@Column(name = "id_bussines_sector", nullable = false)
	private BusinessSector idBussinesSector;
	
	@NotNull
	private Integer idStartUpState;

}
