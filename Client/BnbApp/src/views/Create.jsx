import React, {useState, useEffect} from 'react'
import Navbar2 from '../components/Navbar2'
import {Link, useNavigate} from "react-router-dom"
import ListingService from '../services/ListingService'
import axios from 'axios'


const Create = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [bedroom, setBedroom] = useState(0);
  const [nightlyRate, setNightlyRate] = useState(0);
  const [errors, setErrors] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [listings, setListings] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [seshId, setSeshId] = useState(0)
  

const handleChange = (e) => {
    console.log(e.target.files);
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }

    setImagePreviews(images);
}

const navigate = useNavigate()

useEffect(() => {
        // http://localhost:8080/api/listings
        ListingService.getListings()
            .then(res =>{
                console.log(res)
                setListings(res.data);
            })
            .catch(err => console.log(err.response));

        ListingService.getSeshId()
            .then(res =>{
                console.log(res.data)
                setSeshId(res.data)
                
            })
            .catch(err =>{ console.log(err.response)
            })
    },[refresh]);


  const clearForm = () => {
      setTitle("");
      setAddress("");
      setBedroom("");
      setNightlyRate("");
  };

const handleSubmit = (e) => {
    e.preventDefault();

    

    ListingService.createListing({title, address, bedroom, nightlyRate})
        .then(res => {
            console.log("=======CREATED=======", res.data);
            clearForm();
            setRefresh(!refresh);
        })
        .catch(err => {
            console.log(err.response);
            // const responseData = err.response.data;
            // const errArr = [];
            // for (const errObj of responseData) {
            //     errArr.push(errObj.defaultMessage);
            // }
            // setErrors(errArr);
        });
};

const handleDelete = (id) => {
  ListingService.deleteListing(id)
      .then(res => {
          console.log("===== DELETED =====", res.data)
      })
      .catch(err => console.log(err));
};

const handleHeart = (id) => {
  ListingService.getHeartedListing(id)
    .then(res => {
      console.log("==== HEARTED ====", res.data);
      setRefresh(!refresh);
    })
}

  return (
    <div>
        <Navbar2 home="Home" />
        <div>
            <h3>Current Listings</h3>
            <table className="table table-hover"> 
                <thead>
                    <tr>
                        <th>Listing Title</th>
                        <th>Address</th>
                        <th>Bedroom(s)</th>
                        <th>Nightly Rate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
               
                <tbody>
                  { listings.map((eachListing) =>
                    <tr key={eachListing.id}>
                      
                        <td>{eachListing.title}</td>
                        <td>{eachListing.address}</td>
                        <td>{eachListing.bedroom}</td>
                        <td>${eachListing.nightlyRate}</td>
                        
                        <td className="d-flex gap-3">
                            <Link to={`/noobs/edit/${eachListing.id}`} className="btn btn-sm btn-secondary">Edit</Link> 
                            <form>
                                <input type="submit" 
                                        value="Delete" 
                                        className="btn btn-sm btn-danger"
                                        onClick={(e) => handleDelete(eachListing.id)}/>
                            </form>
                            {/* <Link to={`/noobs/heartedListings/${eachListing.id}`}>💖</Link> */}
                            <Link to={`/noobs/heartedListings/${eachListing.id}`}
                                  onClick={(e) => handleHeart(eachListing.id)}>💖</Link>
                        </td> 
                    </tr>
                  )}
                </tbody>
                  
            </table>
        </div>
            <div className="formStart">
                <h3>Add a New Listing</h3>
                  <form onSubmit={handleSubmit}>
                    
                    <div className="row mb-3">
                      <label htmlFor="title" className="col-sm-2 col-form-label">Listing Title</label>
                      <div className="col-sm-10">
                        <input 
                                className="form-control" 
                                id="title" 
                                onChange={e => setTitle(e.target.value)}
                                value={title}/>
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                      <div className="col-sm-10">
                        <input 
                                className="form-control" 
                                id="address" 
                                onChange={e => setAddress(e.target.value)}
                                value={address}/>
                      </div>
                    </div>
        
                    <div className="row mb-3">
                      <label htmlFor="bedroom" className="col-sm-2 col-form-label">Bedroom(s)</label>
                      <div className="col-sm-10">
                        <input 
                              className="form-control" 
                              id="bedroom" 
                              onChange={e => setBedroom(e.target.value)}
                              value={bedroom}/>
                      </div>
                    </div>
        
                    <div className="row mb-3">
                      <label htmlFor="nightlyRate" className="col-sm-2 col-form-label">Nightly Rate</label>
                      <div className="col-sm-10">
                        <input 
                                type="number" 
                                className="form-control" 
                                id="nightlyRate"
                                onChange={e => setNightlyRate(e.target.value)}
                                value={nightlyRate}/>
                      </div>
                    </div>
                    
                    <div className="row mb-3">
                      <label htmlFor="file" className="col-sm-2 col-form-label">Upload Photos</label>
                      <div className="col-sm-10">
                        <input 
                              type="file" 
                              className="form-control" 
                              id="file"
                              multiple 
                              accept="image/*"
                              onChange={handleChange}/>
                      </div>
                    </div>
                      {imagePreviews && (
                        <div id="imgPreview">
                          {imagePreviews.map((img, i) => {
                            return (
                              <img src={img} alt={"image-" + i} key={i} />
                            );
                          })}
                        </div>
                      )}
                   

                    <div className="text-end mb-3"> 
                      {/* <Link to="/noobs/create"><input type="submit" value="Submit" className="btn btn-primary"/></Link> */}
                      <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                  </form>
            </div>
    </div>
  )
}

export default Create