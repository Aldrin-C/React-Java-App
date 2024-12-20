import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
import ListingService from '../services/ListingService';

const Home = () => {
    const [listings, setListings] = useState([]);
    const [refresh, setRefresh] = useState(true);
    // const [userId, setUserId] = useState(0)

    useEffect(() => {
        // http://localhost:8080/api/listings
        ListingService.getListings()
            .then(res =>{
                console.log(res.data)
                setListings(res.data);
            })
            .catch(err => console.log(err.response));
    },[refresh]);

    return (
        <div>
                <Navbar listing="List your place"/>
                <div id="homeBg" className="mb-5">
                    <div className="searchBox">
                        <h4 className="text-center">Your World Awaits</h4>
                        <div>
                            <form id="searchBar">
                                <input type="search" placeholder="search destinations"/>
                                <img src="/src/assets/search-dark.png" alt="searchIcon"/>
                            </form>
                            
                        </div>
            
                        <div className="text-center">

                            <Link to ="/noobs/destinations/siargao" className="btn btn-secondary">Submit</Link>
                            {/* <input type="submit" className="btn btn-info"/> */}
                        </div>
                    </div>
                </div>
                <h3 className="topDest">Top Destinations In the US</h3>
                <div id="usDiv">
                    <div>
                        <img src="/src/assets/destinations/us/sanFrancisco.jpg"/>
                        <p>San Francisco</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/us/nyc.jpg"/>
                        <p>New York</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/us/lasVegas.jpg"/>
                        <p>Las Vegas</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/us/la.jpg"/>
                        <p>Los Angeles</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/us/orlando.jpg"/>
                        <p>Orlando</p>
                    </div>
                </div>

                <h3 className="topDest">Must See Places in Japan</h3>
                <div id="jpDiv">
                    <div>
                        <img src="/src/assets/destinations/japan/okinawa.jpg"/>
                        <p>Okinawa</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/japan/mtFuji.jpg"/>
                        <p>Mount Fuji</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/japan/tokyo.jpg"/>
                        <p>Tokyo</p>
                    </div>
                </div>

                <h3 className="topDest">Popular Destinations Outside the US</h3>
                <div id="usDiv">
                    <div>
                        <img src="/src/assets/destinations/international/bangkok.jpg"/>
                        <p>Bangkok</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/international/bali.jpg"/>
                        <p>Bali</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/international/singapore.jpg"/>
                        <p>Singapore</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/international/yogyakarta.jpg"/>
                        <p>Yogyakarta</p>
                    </div>
                    <div>
                        <img src="/src/assets/destinations/international/manila.jpg"/>
                        <p>Manila</p>
                    </div>
                </div>
                
        </div>
    )
}

export default Home