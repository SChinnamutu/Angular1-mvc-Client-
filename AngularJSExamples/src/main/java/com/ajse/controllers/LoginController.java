package com.ajse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ajse.dao.LoginDAO;
import com.ajse.entities.LoginEntity;

@Controller
public class LoginController {

	
	@Autowired
	private LoginDAO loginDao;
	
	@RequestMapping(value = "/checkUser", method = RequestMethod.POST)
	@ResponseBody
	public String checkUser(@ModelAttribute("userEntity") LoginEntity loginEntity) {
		boolean res = loginDao.checkUserExist(loginEntity);
		System.out.println("res in controller :::::: " + res);
		if(res) {
			return "1";
		} else {
			return "0";
		}		
	}
	
}
