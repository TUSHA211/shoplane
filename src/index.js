import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Loginpage from './components/Loginpage/Loginpage';
import Main from './components/Page/Main/Main';
import Feed from './components/Page/Feed/Feed';
import Home from './components/Page/Home/Home';
import Signup from './components/Signup/Signup';
import All from './components/Page/Feed/All/All';
import Electronics from './components/Page/Feed/Electronics/Electronics';
import Jewelery from './components/Page/Feed/Jewelery/Jewelery';
import MensClothing from './components/Page/Feed/MensClothing/MensClothing';
import WomensClothing from './components/Page/Feed/WomensClothing/WomensClothing';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Loginpage" element={<Loginpage/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
  <Route path="/Main" element={<Main/>}></Route>
  <Route path="/Feed" element={<Feed/>}></Route>
  <Route path="/All" element={<All/>}></Route>
  <Route path="/Electronics" element={<Electronics/>}></Route>
  <Route path="/Jewelery" element={<Jewelery/>}></Route>
  <Route path="/MensClothing" element={<MensClothing/>}/>
  <Route path="/WomensClothing" element={<WomensClothing/>}/>
  </Routes> 
</React.StrictMode>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
