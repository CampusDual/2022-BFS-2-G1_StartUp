package com.example.demo.dto;

import com.example.demo.entity.ProfessionalProfile;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serial;
import java.io.Serializable;

@Data
public class ProfessionalProfileDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 6658827202281092863L;
    @Size(max = 50)
    @NotNull
    private final String typeProfessionalProfile;
}