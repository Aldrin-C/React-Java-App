import React from 'react'
import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <div className="d-flex p-5 justify-content-between align-items-center">
            <div>
                <h3><Link to="/" className="btn btn-lg btn-warning logo">NooBnB</Link></h3>
            </div>
            <div className="d-flex gap-3">
                <h3><Link to="/noobs/create" className="btn btn-secondary">List your place</Link></h3>
                <h3><Link to="/noobs/register" className="btn btn-primary">Sign Up</Link></h3>
                <h3><Link to="/noobs/login" className="btn btn-success">Log In</Link></h3>
                
            </div>
        </div>


  )
}

export default Navbar