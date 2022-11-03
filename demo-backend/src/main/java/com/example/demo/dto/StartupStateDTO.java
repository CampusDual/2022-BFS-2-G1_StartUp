package com.example.demo.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.Serial;
import java.io.Serializable;

@Data
public class StartupStateDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = -3584451206597739951L;

    private Integer id;

    @NotNull
    private String type;

}
