package com.example.demo.dto;

import java.io.Serializable;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.validation.constraints.NotNull;

import com.example.demo.entity.Invester;
import com.example.demo.entity.Startup;

import lombok.Data;

@Data
public class BusinessSectorDTO implements Serializable{

	private static final long serialVersionUID = 7237352111576876305L;
	
	private Integer id;

	@NotNull
	private String type;
	
	private Set<Invester> investers= new LinkedHashSet<>();
	
	private Set<Startup> bussinesSectors = new LinkedHashSet<>();

}
