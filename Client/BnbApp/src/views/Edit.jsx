import React, {useState, useEffect} from 'react'
import Navbar2 from '../components/Navbar2'
import {Link, useParams, useNavigate } from "react-router-dom"
import ListingService from '../services/ListingService'
import axios from 'axios'

const Edit = () => {

  const {id} = useParams();

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [bedroom, setBedroom] = useState(0);
  const [nightlyRate, setNightlyRate] = useState(0);
  const [imagePreviews, setImagePreviews] = useState([]);

  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    console.log(e.target.files);
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }

    setImagePreviews(images);
  };


  useEffect(()=>{
    ListingService.getOneListing(id)
      .then(res=>{
        console.log("!!!!!!!!!!!!id",id)
        console.log(res.data);
                const foundListing = res.data;
                setTitle(foundListing.title);
                setAddress(foundListing.address);
                setBedroom(foundListing.bedroom);
                setNightlyRate(foundListing.nightlyRate);
      })
      .catch(err=>console.log(err))

  }, [])


  const handleSubmit = (e) => {
      e.preventDefault();
      ListingService.updateListing({id, title, address, bedroom, nightlyRate })
      
          .then(res => {
              console.log("=======Edited=======", res.data);
              navigate("/noobs/create")
          })
          .catch(err => {
              console.log(err.response.data);
              // const responseData = err.response.data;
              // const errArr = [];
              // for (const errObj of responseData) {
              //     errArr.push(errObj.defaultMessage);
              // }
              // setErrors(errArr);
          });
  };


  return (
    <div>
      <Navbar2 home="Home" />
      <div className="formStart">
        <h3>Edit Current Listing</h3>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Listing Title
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="bedroom" className="col-sm-2 col-form-label">
              Bedroom(s)
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                id="bedroom"
                onChange={(e) => setBedroom(e.target.value)}
                value={bedroom}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="nightlyRate" className="col-sm-2 col-form-label">
              Nightly Rate
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="nightlyRate"
                onChange={(e) => setNightlyRate(e.target.value)}
                value={nightlyRate}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="file" className="col-sm-2 col-form-label">
              Upload Photos
            </label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control"
                id="file"
                multiple
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>
          {imagePreviews && (
            <div id="imgPreview">
              {imagePreviews.map((img, i) => {
                return <img src={img} alt={"image-" + i} key={i} />;
              })}
            </div>
          )}

          <div className="text-end mb-3">
            {/* <Link to="/noobs/create"><input type="submit" value="Submit" className="btn btn-primary"/></Link> */}
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
