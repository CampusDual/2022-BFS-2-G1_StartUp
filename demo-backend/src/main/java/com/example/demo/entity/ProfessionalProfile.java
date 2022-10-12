package com.example.demo.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "professional_profile")
public class ProfessionalProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_professional_profile", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull
    @Column(name = "type_professional_profile", nullable = false, length = 50)
    private String typeProfessionalProfile;

    @OneToMany(mappedBy = "idProfessionalProfile")
    private Set<Entrepreneur> entrepreneurs = new LinkedHashSet<>();

}