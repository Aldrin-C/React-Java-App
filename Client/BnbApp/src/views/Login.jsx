import React, {useState, useEffect} from 'react'
import Navbar2 from '../components/Navbar2'
import {Link, useNavigate} from "react-router-dom"
import UserService from '../services/UserService'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault();
      UserService.loginUser({email, password})
          .then(res => {
              console.log("=======Logged In=======", res.data);
              navigate("/noobs/create");
              clearForm();
              
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
  

  return (
    <div>
        <Navbar2 home="Home"/>
      <h1 className="text-center">Welcome Back! Please Log In</h1>
        <div className="formCenter">
            <form onSubmit={handleSubmit}>

                <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input  id="email"
                            type="email" 
                            className="form-control"
                            onChange={e=>setEmail(e.target.value)}
                            value={email}/>
                </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input  id="password"
                                type="password" 
                                className="form-control" 
                                onChange={e=>setPassword(e.target.value)}
                                value={password}/>
                    </div>
                </div>

                <div className="text-end mb-3"> 
                    <input type="submit" value="Log In" className="btn btn-success"/>
                </div>

            </form>
            
            <div className="text-end">
                <p>Don't have an Account? <Link to="/noobs/register">Create an Account</Link></p>
                <p><Link to="/noobs/register">Forgot Password?</Link></p>
            </div>
    
        </div>
    </div>
  )
}

export default Login