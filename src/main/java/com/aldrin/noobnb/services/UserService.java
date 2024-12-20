package com.aldrin.noobnb.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.aldrin.noobnb.models.LoginUser;
import com.aldrin.noobnb.models.User;
import com.aldrin.noobnb.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
    private UserRepository userRepo;
    
    // Register User
    public User register(User newUser, BindingResult result) {
        // Additional validations!
    		// find user in the DB by email
    	Optional<User> optionalUser =userRepo.findByEmail(newUser.getEmail());
        	// if email is exists then reject
    	if(optionalUser.isPresent()) {
    		// add an error message
    		result.rejectValue("email", "bob", "Sorry, that email is taken");
    	}
    		// check if pw don't match
    	if(!newUser.getPassword().equals(newUser.getConfirm()) ) {
    		// if not same show error
    		result.rejectValue("password", "batman", "Sorry, password do not match");		
    		
    	}
    		// if the error 'result has any errors, return
    	if(result.hasErrors()) {
    		return null;
    	}
    	
    	// ELSE - hash and set the pw 
    	
    	String hashedPw = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashedPw);
    
    
    	// Save user in the db
    	
    	User registeredUser = userRepo.save(newUser);
    	
    	return registeredUser;
    	
    }
    public User login(LoginUser newLoginObject, BindingResult result) {
        //Additional validations!
    	
    		// find user by email in DB
    	Optional<User> currentUser = userRepo.findByEmail(newLoginObject.getEmail());
    		// if email is not in DB, reject and show error
    	if(!currentUser.isPresent()) {
    		result.rejectValue("email", "robin", "Sorry, that email is not registered");
    		return null;
    	}
    		// get the current User
    	User loggedUser = currentUser.get();
    		// if Bcrypt PW match fails - reject
    	if(!BCrypt.checkpw(newLoginObject.getPassword(), loggedUser.getPassword())) {
    	    result.rejectValue("password", "Matches", "Invalid Password! Try again");
    	}

    		// if 'result' has errors, return
    	if(result.hasErrors()) {
    		return null;
    	}
    	
    		// ELSE return the user object
        return loggedUser;
        
    }
    
    public User getOneUser(Long id) {
    	Optional<User> optionalUser = userRepo.findById(id);
    	return optionalUser.orElse(null);
    }
    
    
}
