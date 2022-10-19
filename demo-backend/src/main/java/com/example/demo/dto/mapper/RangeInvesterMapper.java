package com.example.demo.dto.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.demo.dto.RangeInvesterDTO;
import com.example.demo.entity.RangeInvester;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface RangeInvesterMapper extends GenericMapper<RangeInvester, RangeInvesterDTO> {
    @Override
    @Mapping(target = "id")
    RangeInvester asEntity(RangeInvesterDTO dto);
}