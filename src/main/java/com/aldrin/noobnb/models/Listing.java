package com.aldrin.noobnb.models;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="listings")
public class Listing {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotEmpty(message="Listing title is required!")
    @Size(min=2, max=30, message="Listing title must be between 2 and 30 characters")
    private String title;
    
    @NotEmpty(message="Address is required!")
    @Size(min=2, max=30, message="Address must be between 2 and 30 characters")
    private String address;
    
    @NotNull(message="Number of bedrooms is required!")
    @Min(value=1, message="Number of bedrooms must be positive")
    private Integer bedroom;
    
    @NotNull(message="Nightly rate is required!")
    @Min(value=1, message="Rate must be positive")
    private Long nightlyRate;
        
    @Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
	
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    
//    @Transient
//    private Long ownerId;
    
	//---------------
  	@ManyToOne(fetch=FetchType.LAZY)
  	@JoinColumn(name="owner_id")
  	private User owner;
  	
//  M : M
  	@ManyToMany(fetch = FetchType.LAZY)
  	 @JoinTable(
  	        name = "users_hearts", 
  	        joinColumns = @JoinColumn(name = "listing_id"), 
  	        inverseJoinColumns = @JoinColumn(name = "user_id")
  	    ) 
  	
  	private List<User> hearters;
  	 
  	 
  	// ==== Constructor ====
  	public Listing() {
  		
  	}
  	
  	// ==== Getters and Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getBedroom() {
		return bedroom;
	}
	public void setBedroom(Integer bedroom) {
		this.bedroom = bedroom;
	}
	public Long getNightlyRate() {
		return nightlyRate;
	}
	public void setNightlyRate(Long nightlyRate) {
		this.nightlyRate = nightlyRate;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	public User getOwner() {
		return owner;
	}
	public void setOwner(User owner) {
		this.owner = owner;
	}
	public List<User> getHearters() {
		return hearters;
	}
	public void setHearters(List<User> hearters) {
		this.hearters = hearters;
	}
  	
//	public Long getOwnerId() {
//			return ownerId;
//	}
//	
//	public void setOwnerId(Long ownerId) {
//			this.ownerId = ownerId;
//	}

}
