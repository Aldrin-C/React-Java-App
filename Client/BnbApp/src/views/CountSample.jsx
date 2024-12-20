import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CountSample = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        axios.get("http://localhost:8080/api/count", {withCredentials: true})
            .then(response => setCount(response.data))
            .catch()
        
    },[])
        
  return (
    <div>Count: {count}</div>
  )
}

export default CountSample