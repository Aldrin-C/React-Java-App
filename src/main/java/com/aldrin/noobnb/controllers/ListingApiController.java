package com.aldrin.noobnb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldrin.noobnb.models.Listing;
import com.aldrin.noobnb.models.User;
import com.aldrin.noobnb.services.ListingService;
import com.aldrin.noobnb.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api")
public class ListingApiController {
	
	@Autowired
	private ListingService listingService;
	
	@Autowired
	private UserService userService;
	
	// ==== Get All ====
	@GetMapping("/listings")
	public ResponseEntity<Object> getAllListings() {
		System.out.println("====== Get Listings ======"
						+ listingService.getAllListings());
		return ResponseEntity.ok().body(listingService.getAllListings());
		
	}
	
	// ==== Create ====
	@PostMapping("/listings") 
	public ResponseEntity<Object> createListing(@Valid @RequestBody Listing newListing, 
											BindingResult result ){
//		System.out.println("====$$$$$$$$$$$$" + newListing.getOwnerId());
		if(result.hasErrors()) {
			System.out.println(result.getAllErrors());
			return ResponseEntity.status(400).body(result.getAllErrors());
		}
//		User currentUser = userService.getOneUser(newListing.getOwnerId());

//		System.out.println(currentUser.getFirstName());
//		newListing.setOwner(currentUser);
		
		Listing savedListing = listingService.createListing(newListing);
		System.out.println("====== POST Create Listing ======" + savedListing);
		return ResponseEntity.ok().body(savedListing);
	}
	
	// ==== Get One ====
	@GetMapping("/listings/{id}")
	public Listing oneStudent(@PathVariable Long id) {
		return listingService.getOneListing(id);
	}

	// ==== Update ====
	@PutMapping("/listings/{id}")
	public ResponseEntity<Object> updateClient(@PathVariable("id") Long id, @Valid @RequestBody Listing listing,
			BindingResult result) {
		if (result.hasErrors()) {
			return ResponseEntity.status(400).body(result.getAllErrors());
		}
		Listing savedListing = listingService.updateListing(listing);
		return ResponseEntity.ok().body(savedListing);
	}
	
	// ==== Delete ====
	@DeleteMapping("/listings/{id}")
	public ResponseEntity<Object> deleteClient(@PathVariable Long id) {
		listingService.deteListing(id);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/listings/sesh")
	public ResponseEntity<Object> getSesh(HttpSession session) {
//		if (session.getAttribute("userId") == null) {
//			return ResponseEntity.ok().body("/");
//		}
		Long seshId = (Long) session.getAttribute("userId");
		
		
		System.out.println("====== Get Session Id ======"
						+ seshId);
		return ResponseEntity.ok().body(seshId);
		
	}
	
	
	
// ==== MANY TO MANY ====
	@GetMapping("/heartedListings/{id}")
	public ResponseEntity<Object> addHearter(@PathVariable("id") Long id, 
											HttpSession session) {
//		get the current user logged in
		Long userId = (Long) session.getAttribute("userId");
//		find the user from the DB
		User user = userService.getOneUser(userId);
		
//		get the Listing
		Listing listing = listingService.getOneListing(id);

//		add the user to the Listing
		listing.getHearters().add(user);
//		OR
//		user.getHeartedListing().add(listing);
		
//		SAVE TO THE DB
		listingService.updateListing(listing);
		
		return ResponseEntity.ok().body(listing);
	}
	
//	======= SESSION SAMPLE =======
	@GetMapping("/count")
	public ResponseEntity<Object> sessionCount(HttpSession session) {
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		}
		Integer count = (Integer) session.getAttribute("count") +1;
		
		session.setAttribute("count", count);
		return ResponseEntity.status(200).body(count);
	}
//	TEST
	
}
