import React from 'react'
import {Link} from "react-router-dom"
import Navbar2 from '../components/Navbar2'

const Details = () => {
  return (
    <div>
        <Navbar2 home="Home" />
        <div id="detailsBg">
            <div className="d-flex justify-content-center gap-2 p-5">
                <div>
                    <img src="/src/assets/lodge1/lodge1.1.webp" className="detailsImg-lg"/>
                </div>
                <div>
                    <div className="d-flex gap-2">
                        <div className="col-sm">
                            <img src="/src/assets/lodge1/lodge1.2.webp" className="detailsImg-sm"/>
                        </div>
                        <div className="col-sm">
                            <img src="/src/assets/lodge1/lodge1.3.webp" className="detailsImg-sm"/>
                        </div>
                    </div>
                    <div>
                        <img src="/src/assets/lodge1/lodge1.4.webp" className="detailsImg-sm"/>
                        
                    </div>
                </div>
            </div>
        </div>

        <div id="amenities">
            <h3>Amenities</h3>
            <ul className="d-flex justify-content-start gap-5">
                <li>Wifi</li>
                <li>Washer and Dryer</li>
                <li>TV</li>
                <li>Kitchen</li>
                <li>Beach access</li>
            </ul>
        </div>

        <div id="leaveReview">
            <h3>Leave a Review</h3>
            <form>
                <textarea rows="7" cols="50" className="form-control  mb-3" >
                </textarea>
                <label>Rating</label>
                <select>
                    <option value="0"></option>
                    <option value="1">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                </select>
                ⭐<br></br>
                <input type="submit" value="Submit Review" className="btn btn-warning"/>
            </form>
        </div>
        <div className="d-flex justify-content-center gap-2 mb-5">
            <div id="reviews">
                    <h3>Reviews of Callie's Guest House</h3>
                <div className="d-flex gap-5">
                    <div>
                        <p>Guest name:</p>
                    </div>
                    <div>
                        <p className="lh-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="lh-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="lh-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
                    </div> 
                </div>     
            </div>
            <div id="ratings">
                <h3>Rating</h3>
                    <h4>4/5 ⭐⭐⭐⭐</h4>
            </div>
        </div>

        
    </div>
  )
}

export default Details