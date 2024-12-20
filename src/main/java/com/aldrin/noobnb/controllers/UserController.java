package com.aldrin.noobnb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.aldrin.noobnb.models.LoginUser;
import com.aldrin.noobnb.models.User;
import com.aldrin.noobnb.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

	@Autowired
	private UserService userService;

	

	@GetMapping("/")
	public String index(Model model) {

		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "loginReg.jsp";
	}

	
	// ===== REGISTRATION =====
	
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") 
			User newUser, BindingResult result, Model model,
			HttpSession session) {

		// call a register method in the service
		// to do some extra validations and create a new user!
		// before checking for errors, intercept the newUser and the error 'result'
		User registeredUser = userService.register(newUser, result);

		if (result.hasErrors()) {
			// Be sure to send in the empty LoginUser before
			// re-rendering the page.
			model.addAttribute("newLogin", new LoginUser());
			return "loginReg.jsp";
		} else {
			// if no errors, Store their ID from the DB in session or log them in

			session.setAttribute("userId", registeredUser.getId());
			session.setAttribute("userName", registeredUser.getFirstName());
			session.setAttribute("userName", registeredUser.getLastName());
			return "redirect:/books";
		}

	}


	// ===== LOGIN =====
	
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") 
			LoginUser newLogin, BindingResult result, Model model,
			HttpSession session) {
		
		User user = userService.login(newLogin, result);
			
		if (result.hasErrors()) {
			// Be sure to send in the empty LoginUser before
			// re-rendering the page.
			model.addAttribute("newUser", new User());
			return "loginReg.jsp";
		} else {
			// if no errors, Store their ID from the DB in session or log them in

			session.setAttribute("userId", user.getId());
			session.setAttribute("userName", user.getFirstName());
			session.setAttribute("userName", user.getLastName());
			return "redirect:/books";
		}
		
	}
	
	@GetMapping("/dashboard")
	public String renderDashboard(HttpSession session) {
		// route guard
		// check if user is logged in
		if(session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		return "dashboard.jsp";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session,
						RedirectAttributes flash) {
		session.invalidate();
		flash.addFlashAttribute("logout", "You have successfully logged out");
		return "redirect:/";
	}
	
	
}
