import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import Login from './views/Login';
import Details from './views/Details';
import Create from './views/Create';
import Edit from './views/Edit';
import Navbar from './components/Navbar2';
import './App.css'
import CountSample from './views/CountSample';
import Genshin from './views/Genshin';


function App() {


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noobs/destinations/siargao" element={<Dashboard />} />
        <Route path="/noobs/register" element={<Register />} />
        <Route path="/noobs/login" element={<Login />} />
        <Route path="/noobs/details" element={<Details />} />
        <Route path="/noobs/create" element={<Create />} />
        <Route path="/noobs/edit/:id" element={<Edit />} />
        <Route path="/noobs/count" element={<CountSample />} />
        <Route path="/genshin" element={<Genshin />} />

      </Routes>
    </div>
  )
}

export default App
