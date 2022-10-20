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
@Table(name="startup_state")
public class StartupState {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_startup_state")
	private Integer id;
	
	@Column(name="type_startup", nullable = false)
	@NotNull
	private String type;
	
	@OneToMany(mappedBy = "idStartupState")
	private Set<Startup> startups= new LinkedHashSet<>();

}
