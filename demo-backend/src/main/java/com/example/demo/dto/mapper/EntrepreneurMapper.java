package com.example.demo.dto.mapper;


import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.example.demo.dto.EntrepreneurDTO;
import com.example.demo.entity.Entrepreneur;

@Mapper
public interface EntrepreneurMapper {
	EntrepreneurMapper INSTANCE = Mappers.getMapper(EntrepreneurMapper.class);

    EntrepreneurDTO entrepreneurToEntrepreneurDto(Entrepreneur entrepreneur);

    List<EntrepreneurDTO> entrepreneurToEntrepreneurDtoList(List<Entrepreneur> entrepreneurs);

    Entrepreneur entrepreneurDTOtoEntrepreneur(EntrepreneurDTO entrepreneurDTO);
}