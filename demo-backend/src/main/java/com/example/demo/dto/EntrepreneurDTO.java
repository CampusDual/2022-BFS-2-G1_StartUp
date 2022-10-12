package com.example.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serial;
import java.io.Serializable;

@Data
public class EntrepreneurDTO implements Serializable {

	@Serial
	private static final long serialVersionUID = 7666094310092518378L;

	private final Integer id;
	@Size(max = 50)
	@NotNull
	private final String firstName;
	@Size(max = 50)
	@NotNull
	private final String lastName;
	@Size(max = 50)
	@NotNull
	private final String email;
	@Size(max = 50)
	@NotNull
	private final ProfessionalProfileDTO idProfessionalProfile;
	@Size(max = 100)
	@NotNull
	private final String linkedinProfile;

}
