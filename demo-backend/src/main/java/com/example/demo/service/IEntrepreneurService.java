package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.EntrepreneurDTO;

public interface IEntrepreneurService{

	//EntrepreneurDTO getEntrepreneur(Integer id);
	//DataSourceRESTResponse<List<EntrepreneurDTO>> getEntrepreneurs(AnyPageFilter pageFilter);
	//EntrepreneurDTO createEntrepreneur(EntrepreneurDTO createEntrepreneurRequest);
	//Integer deleteEntrepreneur(Integer id);
	List<EntrepreneurDTO> findAll();
	//Integer editEntrepreneur(EntrepreneurDTO editEntrepreneurRequest);

}