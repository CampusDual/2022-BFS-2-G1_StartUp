package com.example.demo.dto;

import java.io.Serial;
import java.io.Serializable;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class ProfessionalProfileDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 6658827202281092863L;
    @Size(max = 50)
    @NotNull
    private String typeProfessionalProfile;
}