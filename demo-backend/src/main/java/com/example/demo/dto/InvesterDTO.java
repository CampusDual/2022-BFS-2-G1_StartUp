package com.example.demo.dto;

import java.io.Serial;
import java.io.Serializable;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.demo.utils.Constant;

import lombok.Data;

@Data
public class InvesterDTO implements Serializable{

	@Serial
	private static final long serialVersionUID = 7916122193771477568L;

	private Integer id;

	@NotEmpty(message = Constant.INVESTER_NAME_REQUIRED)
	private String name;

	@Email(message= Constant.INVESTER_EMAIL_INVALID)
	@NotEmpty(message = Constant.INVESTER_EMAIL_REQUIRED)
	private String email;
	
	@NotNull(message = Constant.INVESTER_RANGE_REQUIRED)
	private RangeInvesterDTO idInvesterRange;
	
	@NotNull(message = Constant.INVESTER_BUSINESS_SECTOR_REQUIRED)
	private BusinessSectorDTO idBusinessSector;
	
<<<<<<< HEAD
	@NotNull
=======
	@NotNull(message = Constant.INVESTER_STARTUP_STATE_REQUIRED)
>>>>>>> FSG1-46-add-crud-from-backend
	private StartupStateDTO idStartUpState;

}
