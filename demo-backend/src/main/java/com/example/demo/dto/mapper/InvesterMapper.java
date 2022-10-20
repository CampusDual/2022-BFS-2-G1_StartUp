package com.example.demo.dto.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.demo.dto.InvesterDTO;
import com.example.demo.entity.Invester;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface InvesterMapper extends GenericMapper<Invester, InvesterDTO> {
    @Override
    @Mapping(target = "id")
    Invester asEntity(InvesterDTO dto);
}