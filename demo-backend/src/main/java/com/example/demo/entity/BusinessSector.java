package com.example.demo.entity;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name="business_sector")
public class BusinessSector {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_business_sector")
	private Integer id;
	
	@Column(name="type_business_sector", nullable = false)
	@NotNull
	private String type;
	
	@OneToMany(mappedBy = "idBussinesSector")
	private Set<Invester> investers= new LinkedHashSet<>();
	
	@OneToMany(mappedBy = "idBussinesSector")
	private Set<Startup> bussinesSectors= new LinkedHashSet<>();
	
}