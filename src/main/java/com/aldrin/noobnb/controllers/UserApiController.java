package com.aldrin.noobnb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.aldrin.noobnb.models.LoginUser;
import com.aldrin.noobnb.models.User;
import com.aldrin.noobnb.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api")
public class UserApiController {
	
	@Autowired
	private UserService userService;
	
	//Registration
	@PostMapping("/register")
	public ResponseEntity<Object> register(@Valid @RequestBody User newUser,
										BindingResult result, HttpSession session){
				
		User registeredUser = userService.register(newUser, result);
		
		System.out.println("====== POST Create User ======" + registeredUser);
		if(result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return ResponseEntity.status(400).body(result.getAllErrors());
		} else {
			
//	==== If there are no errors, store their id, first name, last name in session or log them in ====
			
			
		session.setAttribute("userId", registeredUser.getId());
		
		Long seshId = (Long) session.getAttribute("userId");
		System.out.println("====Register Rout=====" + seshId);
		System.out.println("Session UserId after setting: " + session.getAttribute("userId"));
		session.setAttribute("firstName", registeredUser.getFirstName());
		session.setAttribute("lastName", registeredUser.getLastName());
		
		return ResponseEntity.ok().body(registeredUser);	
		
		}
	}
	
	
	// ===== LOGIN =====
	@PostMapping("/login")
	public ResponseEntity<Object> login(@Valid @RequestBody LoginUser newLogin, 
										BindingResult result,
										HttpSession session) {
		
		User loggedInUser = userService.login(newLogin, result);
			
		if(result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return ResponseEntity.status(400).body(result.getAllErrors());
		} else {	 
			// if no errors, Store their ID from the DB in session or log them in
			session.setAttribute("userId", loggedInUser.getId());
			
			Long seshId = (Long) session.getAttribute("userId");
			System.out.println("====Logged in User ID =====" + seshId);
			System.out.println("Session UserId after setting: " + session.getAttribute("userId"));
			
			session.setAttribute("userName", loggedInUser.getFirstName());
			session.setAttribute("userName", loggedInUser.getLastName());
			return ResponseEntity.ok().body(loggedInUser);
		}
		
	}
	
	
	// ===== LOGOUT =====
	@GetMapping("/logout")
	public ResponseEntity<Object> logout(HttpSession session) {
		session.invalidate();
		
//		System.out.println("***** Logged out, Session ID *****" + session.getAttribute("userId"));
//		Long seshId = (Long) session.getAttribute("userId");
		
		return null;
	}
	
}
