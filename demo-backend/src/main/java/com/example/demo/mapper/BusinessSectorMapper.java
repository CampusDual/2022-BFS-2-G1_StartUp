package com.example.demo.mapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.demo.dto.BusinessSectorDTO;
import com.example.demo.entity.BusinessSector;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface BusinessSectorMapper extends GenericMapper<BusinessSector, BusinessSectorDTO> {
    @Override
    @Mapping(target = "id")
    BusinessSector asEntity(BusinessSectorDTO dto);
}