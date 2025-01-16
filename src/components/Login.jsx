import React from 'react';
import "../styles/Login.scss";
import { useState } from 'react';
import { logo_url } from '../Utils/data';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

const Login = () => {

  const [isSignInForm,setSignInForm] = useState(true);
  
  const toggleForm=()=>{
    setSignInForm(!isSignInForm);
  }
  const handleSignIn = (e)=>{
    e.preventDefault();
    console.log("Sign In Successfull");
  }
  const handleSignUp = (e)=>{
    e.preventDefault();
    console.log("Sign Up Successfull");
  }
  return (
    <div className="login-section">
      <div className='logo-section'>
        <img src={logo_url} alt='logo'/>
      </div>
      <div className='form-section'>
        <div className='form-container'>
          <div className='form-c-fields'>
            <h1>{isSignInForm?"Sign In":"Sign Up"}</h1>
            <form>
                {!isSignInForm && <input type="text"  placeholder='Enter your Name' className='login-input'></input> }
                  <input type="text" autoComplete='email' placeholder='Enter your Number or Email' aria-label='Email or Number' className='login-input'></input>
                  <input type="password" placeholder='Enter your Password' className='login-input'></input>

                  {isSignInForm?
                  <Button type="submit" fullwidth="true" size="medium" variant="contained" sx={{backgroundColor:"red", fontWeight:"bolder",width:"100%",fontSize:"medium",marginTop:"7px"}} onClick={handleSignIn}>Sign In</Button> :
                  <Button type="submit" fullwidth="true" size="medium" variant="contained" sx={{backgroundColor:"red", fontWeight:"bolder",width:"100%",fontSize:"medium",marginTop:"7px"}} onClick={handleSignUp}>Sign UP</Button>
                  }
                  <br></br>
                  <FormControlLabel control={<Checkbox sx={{
                      color:"red",
                      '&.Mui-checked': {
                        color: "white",
                      },
                    }}/>} label="Remember Me" sx={{color:"white"}}/>
            </form>
            <div className='Extra-form-info'>
              <p>{isSignInForm ? "New to Netflix ?" : "Already Registered ?"}<Button onClick={toggleForm} sx={{fontFamily:"inherit", color:"white",fontWeight:"bolder"}}>{isSignInForm?"Sign Up Now":"Sign In"}</Button></p>
              
              <p>This page is protected by Google mycatptcha to ensure you're not a boot <span> Learn more</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;