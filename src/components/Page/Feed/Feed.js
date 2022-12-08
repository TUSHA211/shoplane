import React from "react";
import {Routes, Route} from 'react-router-dom';
import All from "./All/All";
import Electronics from "./Electronics/Electronics";
import './Feed.css';
import Jewelery from "./Jewelery/Jewelery";
import MensClothing from "./MensClothing/MensClothing";
import WomensClothing from "./WomensClothing/WomensClothing";




function Feed() {
	return (
        <div>
        <Routes>
        <Route path="/all" element={<All/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/Jwellery" element={<Jewelery/>}/>
        <Route path="/MensClothing" element={<MensClothing/>}/>
        <Route path="/WomensClothing" element={<WomensClothing/>}/>
      </Routes>
      </div>
    )
  }
  
  export default Feed;