package com.example.demo.dto;

import java.io.Serializable;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.validation.constraints.NotNull;

import com.example.demo.entity.Invester;

import lombok.Data;

@Data
public class RangeInvesterDTO implements Serializable{

	private static final long serialVersionUID = -5193982016520324901L;

	private Integer id;
	
	@NotNull
	private String value;
	
	private Set<Invester> investers= new LinkedHashSet<>();
	
}
