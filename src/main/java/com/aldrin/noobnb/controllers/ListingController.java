package com.aldrin.noobnb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.aldrin.noobnb.services.ListingService;

import jakarta.servlet.http.HttpSession;

@Controller
public class ListingController {
	
	@Autowired
	private ListingService listingService;
	
	// ==== Get All Listings ====
	@GetMapping("/home")
	public String renderHomePage(HttpSession session, Model model) {
		if(session.getAttribute("userId") == null) {
			return "redirect:/";
		}
		
		model.addAttribute("listingList", listingService.getAllListings());
			return "dashboard.jsp";
	}
	
}
