import React from 'react'
import {Link} from "react-router-dom"
import Navbar2 from '../components/Navbar2'

const Dashboard = () => {
  return (
    <div>  
        <Navbar2 home="Home" />

        <div className="d-flex justify-content-center align-items-start gap-3">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex justify-content-between gap-4">
                <div>
                  <Link to="/noobs/details"><img src="/src/assets/lodge1/lodge1.1.webp" width="350px" height="200px" className="imgBorder"/></Link>
                  <h5 className="p-1 dashH5">Callie's Guest House</h5>
                    <div className="d-flex justify-content-between">
                      <p>Average Price per Night: $30</p>
                      <p>⭐⭐⭐⭐</p>
                      <p>💖</p>
                    </div>
                    <button className="btn btn-primary">Check for Availability</button>
                </div>
                <div>
                  <img src="/src/assets/lodge2/cloud9_1.webp" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH>5">Cliffside Dive</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $300</p>
                    <p>⭐⭐</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
              </div>

              <div className="d-flex justify-content-between gap-4">
                <div>
                  <img src="/src/assets/lodge3/siargao.jpg" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH5">Casa De Loren</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $150</p>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
                <div>
                  <img src="/src/assets/lodge4/siargao2.webp" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH5">The Henry</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $80</p>
                    <p>⭐⭐⭐</p>
                    <p>💖</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
              </div>

              <div className="d-flex justify-content-between gap-4">
                <div>
                  <img src="/src/assets/lodge5/tropicalTemple.webp" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH5">Tropical Temple</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $80</p>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
                <div>
                  <img src="/src/assets/lodge6/asparas.png" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH5">Asparas Tribe</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $70</p>
                    <p>⭐⭐</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
              </div>

              <div className="d-flex justify-content-between gap-4">
                <div>
                  <img src="/src/assets/lodge7/rover.png" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH5">The Rover</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $120</p>
                    <p>⭐⭐⭐⭐</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
                <div>
                  <img src="/src/assets/lodge8/blauset.png" width="350px" height="200px" className="imgBorder"/>
                  <h5 className="p-1 dashH5">Blauset Two</h5>
                  <div className="d-flex justify-content-between">
                    <p>Average Price per Night: $140</p>
                    <p>⭐⭐⭐</p>
                  </div>
                  <button className="btn btn-primary">Check for Availability</button>
                </div>
              </div>

            </div> 
                

            <div className="gMap">
              <img src="/src/assets/GmapsSiargao.png" alt="gMaps"/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard