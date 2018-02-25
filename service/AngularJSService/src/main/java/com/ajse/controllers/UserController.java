package com.ajse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ajse.dao.UserDao;
import com.ajse.entities.UserEntity;

@Controller
@RequestMapping(value = "/user/")
public class UserController {
	
	@Autowired
	private UserDao userDao;
		
	@RequestMapping(value = "/addNew", method = RequestMethod.POST)
	@ResponseBody
	public String addUser(@ModelAttribute("userEntity") UserEntity userEntity) {
		boolean res = userDao.addUser(userEntity);
		System.out.println("rest in controller :::::: " + res);
		if(res) {
			return "1";
		} else {
			return "0";
		}		
	}
	
	@RequestMapping(value = "/editUser", method = RequestMethod.POST)
	@ResponseBody
	public String editUser(@ModelAttribute("userEntity") UserEntity userEntity) {
		boolean res = userDao.editUser(userEntity);
		System.out.println("res in controller :::::: " + res);
		if(res) {
			return "1";
		} else {
			return "0";
		}		
	}
	
	@RequestMapping(value = "/getUsers", method = RequestMethod.POST)
	@ResponseBody
	public List<UserEntity> getUsers(@ModelAttribute("userId") int userId) {
		System.out.println(">>>>>>>>>>>>>>> Printing user id : >>>>>>> " + userId);
		List<UserEntity> users = userDao.getUsers(userId);
		return users;
	}
	
	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
	@ResponseBody
	public String deleteUser(@ModelAttribute("userId") int userId) {
		System.out.println(">>>>>>>>>>>>>>> Printing user id : >>>>>>> " + userId);
		boolean res = userDao.deleteUser(userId);
		if(res) {
			return "1";
		} else {
			return "0";
		}	
	}


}
