package com.example.demo.dto.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.demo.dto.StartupDTO;
import com.example.demo.entity.Startup;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface StartupMapper extends GenericMapper<Startup, StartupDTO> {
    @Override
    @Mapping(target = "id")
    Startup asEntity(StartupDTO dto);
}