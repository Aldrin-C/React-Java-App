package com.aldrin.noobnb.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.aldrin.noobnb.models.Listing;

@Repository
public interface ListingRepository extends CrudRepository<Listing, Long> {
	List<Listing> findAll();
}
