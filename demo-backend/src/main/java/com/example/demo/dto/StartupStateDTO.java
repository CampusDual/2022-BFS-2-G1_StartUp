package com.example.demo.dto;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.validation.constraints.NotNull;

import com.example.demo.entity.Startup;

import lombok.Data;

@Data
public class StartupStateDTO {

	private Integer id;

	@NotNull
	private String type;

	private Set<Startup> startups = new LinkedHashSet<>();
}
