package com.ajse.dao;

import com.ajse.entities.LoginEntity;

public interface LoginDAO {

	public boolean checkUserExist(LoginEntity loginEntity);
	
}
