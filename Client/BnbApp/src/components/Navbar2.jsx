import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import UserService from '../services/UserService';
import ListingService from '../services/ListingService';
import axios from 'axios';

const Navbar2 = (props) => {
  
  const [seshId, setSeshId] = useState(0)
  

const navigate = useNavigate();

  useEffect(() => {
//     // http://localhost:8080/api/listings
//     // ListingService.getListings()
//     //     .then(res =>{
//     //         console.log(res.data)
//     //         setListings(res.data);
//     //     })
//     //     .catch(err => console.log(err.response));

    ListingService.getSeshId()
        .then(res =>{
            console.log(res.data)
            setSeshId(res.data)
            
        })
        .catch(err =>{ console.log(err.response)
        })
},[]);

const handleLogout = (e) => {
UserService.logoutUser()
  .then(res => {
      console.log("===== LOGGED OUT =====", res.data)
      setSeshId(0)
      navigate("/")
      

  })
  .catch(err => console.log(err));
};

  return (
    <div className="d-flex p-5 justify-content-between align-items-center">
            <div>
                <h3><Link to="/" className="btn btn-lg btn-warning logo">NooBnB</Link></h3>
            </div>
            <div className="d-flex gap-3 align-items-center">
                <h3><Link to="/noobs/create" className="btn btn-secondary">List your place</Link></h3>
                <h3><Link to="/" className="btn btn-info">{props.home}</Link></h3>
                <h3><Link to="/noobs/register" className="btn btn-primary">Sign Up</Link></h3>
                <h3><Link to="/noobs/login" className="btn btn-success">Log In</Link></h3>
                { seshId == 0 ? 
                  <p></p>:
                <button className="btn btn-danger"
                        onClick={(e) => handleLogout()}>
                        Logout</button>
                }
            </div>
        </div>


  )
}

export default Navbar2