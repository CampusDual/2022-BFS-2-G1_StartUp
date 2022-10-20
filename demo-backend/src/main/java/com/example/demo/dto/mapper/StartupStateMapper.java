package com.example.demo.dto.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.demo.dto.StartupStateDTO;
import com.example.demo.entity.StartupState;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface StartupStateMapper extends GenericMapper<StartupState, StartupStateDTO> {
    @Override
    @Mapping(target = "id")
    StartupState asEntity(StartupStateDTO dto);
}