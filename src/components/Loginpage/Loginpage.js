import { useLocation, useNavigate } from 'react-router';
import React, {useState} from "react";



const Login = function () {

  let [signupMode, setSignupMode] = useState("Signup")

  const changeSignupMode = () => {
    setSignupMode(signupMode === "loginpage" ? "Signup" : "loginpage")
  }

  if (signupMode === "Signup") {
 
  <div className="SignUp-form-container">
    <form className="SignUp-form">
      <div className="SignUp-form-content">
        <h3 className="SignUp-form-title">Sign Up</h3>
       
        <div className="form-group mt-3">
        
          <input type="name" className="form-control mt-1" placeholder="First Name" />
        </div>
        <div className="form-group mt-3">
         
          <input
            type="name"
            className="form-control mt-1"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group mt-3">
         
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group mt-3">
         
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password"
          />
        </div>
        <div className="form-group mt-3">
        
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Password Confirm"
          />
        </div>
        {/* <p className="para text-right mt-2">
            Don't have an account? Login <span className="link-primary" onClick={changeSignupMode}>
            here
          </span>
          </p> */}
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      
      </div>
    </form>
  </div>
}

  let nav = useNavigate();
  let loc = useLocation();
  console.log(loc.pathname);
  function handleClick(e) {
    e.preventDefault();
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    if (e.target[0].value === "abc@gmail.com" && e.target[1].value === "password") {
      nav("/Main", true)
    }
  }


  return (


    <div className="Login-form-container">

      <div className="Login-form-content">

        <div className="form-group mt-3">
          <form onSubmit={handleClick} className="Login-form">
            <h3 className="Login-form-title">Login</h3>
            <div className="form-group mt-3">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" />
            </div>
            <p className="para text-right mt-2">
              Don't have an account? Sign up  <span className="link-primary" onClick={changeSignupMode}>
                here
              </span>
            </p>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
                Login
              </button>
            </div>
          </form>
        </div>
        </div>
        </div>
        );
        }
        export default Login;