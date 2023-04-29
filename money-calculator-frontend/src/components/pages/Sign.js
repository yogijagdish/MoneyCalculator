import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogUserMutation } from "../../services/authAPI";
import { setUserToken } from "../../features/authSlice";
import { useDispatch } from "react-redux";
import {getToken, setToken} from "../../services/userTokenService"

export default function Signin() {

  // stores the data entered by the user in sign in form
  const [signData, setSignData] = useState({ email: "", password: "" });

  const [serverError, setServerError] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [regiterUser, {isLoading}] = useLogUserMutation();

  // update the sigData state if any chnage in sigin form accurs
  const handleChange = (e) => {
    setSignData({ ...signData, [e.target.name]: e.target.value });
  };


  // this function is called when user hits the submit button
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(signData);
    const response =await regiterUser(signData);
    if (response.error){
        console.log(response.error.data)
        setServerError(response.error.data)
    }
    if (response.data) {

        setToken(response.data.token)
        let {access_token} = getToken();
        dispatch(setUserToken({access_token:access_token}))
        navigate('/dashboard')
    }
    
  };
  
    let {access_token} = getToken();
  
    useEffect(()=>{
      dispatch(setUserToken({access_token:access_token}))
    } ,[dispatch,access_token])

  return (
    <>
      <div id="form" className="grid place-content-center mt-52">
        <p className="ml-32 text-2xl"> Sign In </p>


        {/* username fields */}
        <label htmlFor="username" className="text-sm mt-6">
          {" "}
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="user"
          placeholder="email address"
          className="w-80 h-8 mt-4 border-2 rounded-lg"
          onChange={handleChange}
        />
        <p className="text-red-700 mt-2">{serverError.email}</p>
        {/* password field */}
        <label htmlFor="password" className="text-sm mt-6">
          {" "}
          Password{" "}
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="w-80 h-8 mt-4 border-2 rounded-lg"
          onChange={handleChange}
        />
        <p className="text-red-700 mt-2">{serverError.password}</p>
        {/* remember me field */}
        <div className="mt-6">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remeber"> Remember Me </label>
          <NavLink to="/sendemail" className="ml-16">
            {" "}
            Forget Password?{" "}
          </NavLink>
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="mt-6 bg-sky-600 w-80 h-8 rounded-lg"
          onClick={handleClick}
        >
          {" "}
          Submit{" "}
        </button>
        {/* redirect to register page */}
        <p className="mt-4 ml-12">
          {" "}
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-600">
            {" "}
            Register{" "}
          </NavLink>
        </p>
        <p className="text-red-700 mt-4 ml-24">{serverError.msg}</p>
      </div>
    </>
  );
}