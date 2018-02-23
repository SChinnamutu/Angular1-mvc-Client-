package com.ajse.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ajse.dao.LoginDAO;
import com.ajse.entities.LoginEntity;

@Repository("loginDAO")
public class LoginDAOImpl  implements LoginDAO {
	
	
	@Autowired
	private SessionFactory sessionFactory;

	
	@SuppressWarnings("unchecked")
	@Override
	public boolean checkUserExist(LoginEntity loginEntity) {
		Session session = null;
		Transaction transaction = null;
		List<LoginEntity> list = null;
		Query query = null;
		try {
			session = sessionFactory.openSession();
			transaction = session.beginTransaction();
			query = session.createQuery("from LoginEntity where email =:mail and password =:pswd");	
			query.setParameter("mail", loginEntity.getEmail());
			query.setParameter("pswd", loginEntity.getPassword());
			list = query.list();
			transaction.commit();
			if(list.size() > 0)
			{
				return true;
			}
		} catch(Exception e) {
			e.printStackTrace();
			transaction.rollback();
			session.close();
		} finally {
			session.close();
		}
		return false;
	}
	
	


}
