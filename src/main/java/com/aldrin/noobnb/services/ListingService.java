package com.aldrin.noobnb.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aldrin.noobnb.models.Listing;
import com.aldrin.noobnb.repositories.ListingRepository;

@Service
public class ListingService {

	@Autowired
	private ListingRepository listingRepo;
	
	// ==== READ ALL ====
	public List<Listing> getAllListings() {
		return listingRepo.findAll();
	}
	
	// ==== CREATE ====
	public Listing createListing(Listing newListing) {
		return listingRepo.save(newListing);
	}
	
	// ==== READ ONE ====
	public Listing getOneListing (Long id) {
		Optional<Listing> optionalListing = listingRepo.findById(id);
		return optionalListing.orElse(null);
	}
	
	// ==== UPDATE ====
	public Listing updateListing(Listing updatedListing) {
		return listingRepo.save(updatedListing);
	}
	
	// ==== DELETE ====
	public void deteListing(Long id) {
		listingRepo.deleteById(id);
	}
}
