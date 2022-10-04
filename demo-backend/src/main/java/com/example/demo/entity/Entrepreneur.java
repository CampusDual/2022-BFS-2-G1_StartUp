package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
@Table(name = "entrepreneur")
public class Entrepreneur {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_entrepreneur", nullable = false)
	private Integer id;

	@Size(max = 50)
	@NotNull
	@Column(name = "first_name", nullable = false, length = 50)
	private String firstName;

	@Size(max = 50)
	@NotNull
	@Column(name = "last_name", nullable = false, length = 50)
	private String lastName;

	@Size(max = 50)
	@NotNull
	@Column(name = "email", nullable = false, length = 50)
	private String email;

	@Size(max = 50)
	@NotNull
	@Column(name = "id_professional_profile", nullable = false, length = 50)
	private String idProfessionalProfile;

	@Size(max = 100)
	@NotNull
	@Column(name = "linkedin_profile", nullable = false, length = 100)
	private String linkedinProfile;

}