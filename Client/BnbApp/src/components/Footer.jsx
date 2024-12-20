import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        {/* <h3>{props.newHeader}</h3> */}
    <h5><Link to="/"></Link></h5>
</div>
  )
}

export default Footer