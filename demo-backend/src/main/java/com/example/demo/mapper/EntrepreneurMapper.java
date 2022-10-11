package com.example.demo.mapper;


import com.example.demo.dto.EntrepreneurDTO;
import com.example.demo.entity.Entrepreneur;
import org.mapstruct.*;

@Mapper(componentModel = "spring", uses = ReferenceMapper.class)
public interface EntrepreneurMapper extends GenericMapper<Entrepreneur, EntrepreneurDTO> {
    @Override
    @Mapping(target = "id")
    Entrepreneur asEntity(EntrepreneurDTO dto);
}