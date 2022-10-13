package com.example.demo.entity;

import javax.persistence.*;
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

	@NotNull
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id_professional_profile", nullable = false)
	private ProfessionalProfile idProfessionalProfile;

	@Size(max = 100)
	@NotNull
	@Column(name = "linkedin_profile", nullable = false, length = 100)
	private String linkedinProfile;
}