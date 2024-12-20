import React, {useState, useEffect} from 'react'
import axios from "axios"

const Genshin = () => {

    const [gshin, setGshin] = useState([]);

    useEffect(()=>{
        axios.get("https://amiiboapi.com/api/amiibo")
            .then(res => {
                console.log(res)
                setGshin(res.data.amiibo)
            })
            
            .catch()
    },[])

  return (
    <div>Genshin
        <img src={gshin.image}/>
    {/* {
        gshin.map((eachGshin, idx) =>{
            return(
                <ul key={idx}>
                    <img src={eachGshin.image}/>
                </ul>
            )
        })
    } */}
    {/* "https://amiiboapi.com/api/amiibo" */}
    </div>
  )
}

export default Genshin