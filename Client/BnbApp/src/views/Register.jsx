import React, {useState} from 'react'
import Navbar2 from '../components/Navbar2'
import {Link, useNavigate} from "react-router-dom"
import UserService from '../services/UserService'
import axios from "axios"

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  // const [seshId, setSeshId] = useState("")
  

  const [firstNameErr, setFirstNameErr] = useState(true)
  const [lastNameErr, setLastNameErr] = useState(true)
  const [emailErr, setEmailErr] = useState(true)
  const [passwordErr, setPasswordErr] = useState(true)
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(true)





  // --------------- Error Messages ----------------
  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirm("")
    setPasswordErr(true)
    setTimeout(() => {
    }, 1000);
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirm: confirm
    };

     UserService.registerUser(newUser)
            .then(res => {
                console.log("CREATED USER =======", res.data);
                // setSeshId(res.data.id)
                navigate("/noobs/create");
                clearForm();
            })
            .catch(err => {
                console.log(err.response.data);
            });
  };

  const handleFirstName = (e) => {
    const {value} = e.target;
    setFirstName(value);
    if(value.length <1){
        setFirstNameErr("First name is required!")
    }
    else if(value.length < 3){
        setFirstNameErr("First name needs to be more than 2 characters")
    }
    else {
        setFirstNameErr("")
    }  

  }

  const handleLastName = (e) => {
    const {value} = e.target;
    setLastName(value);
    if(value.length <1){
        setLastNameErr("Last name is required!")
    }
    else if(value.length < 3){
        setLastNameErr("Last name needs to be more than 2 characters")
    }
    else {
        setLastNameErr("")
    }   
  }

  const handleEmail = (e) => {
    const {value} = e.target;
    setEmail(value);
    if(value.length <1){
        setEmailErr("Email is required!")
    }
    else if(value.length < 8){
        setEmailErr("Email needs to be more than 8 characters")
    }
    else {
        setEmailErr("")
    }  
  }

  const handlePassword = (e) => {
    const {value} = e.target;
    setPassword(value);
    if(value.length <1){
        setPasswordErr("Password is required!")
    }
    else if(value.length < 8){
        setPasswordErr("Password needs to be more than 8 characters")
    }
    else {
        setPasswordErr("")
    }
  }

  const handleConfirmPassword = (e) => {
    const {value} = e.target;
    setConfirm(value);
    if(value.length <1){
        setConfirmPasswordErr("Please confirm password")
    }
    else if(value != password){
        setConfirmPasswordErr("Confirm password does not match")
    }
    else {
        setConfirmPasswordErr("")
    }  
    
  }

  return (
    <div>
      <Navbar2 home="Home"/>
      <h1 className="text-center">Welcome to NooBnb</h1>
        <div className="formCenter">
          <form onSubmit={handleSubmit}>

            <div className="row mb-3">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="firstName" 
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstName}/>
                <p style={{color: "red"}}>{firstNameErr}</p>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
              <div className="col-sm-10">
                <input 
                      type="text"
                      className="form-control" 
                      id="lastName" 
                      name="last name"
                      value={lastName}
                      onChange={handleLastName}/>
                      
                <p style={{color: "red"}}>{lastNameErr}</p>

              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}/>

                <p style={{color: "red"}}>{emailErr}</p>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input 
                      type="password"
                      className="form-control" 
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePassword}/>
                <p style={{color: "red"}}>{passwordErr}</p>
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
              <div className="col-sm-10">
                <input
                      type="password" 
                      className="form-control" 
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirm}
                      onChange={handleConfirmPassword}/>

                <p style={{color: "red"}}>{confirmPasswordErr}</p>
              </div>
            </div>

            <div className="text-end mb-3"> 
              <input type="submit" value="Sign Up" className="btn btn-primary"/>
            </div>
          </form>
          <div className="text-end">
            <p>Already have an Account? <Link to="/noobs/login">Log In</Link></p>
          </div>
        </div>
    </div>
  )
}

export default Register