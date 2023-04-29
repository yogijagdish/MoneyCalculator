import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/authAPI";

export default function Register() {
  // this state is used to store the information about the user that it logs in the form
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    date_of_birth: "",
    password: "",
    password2: "",
  });

  const [serverError,setServerError] = useState({});

  const navigate = useNavigate('/dashboard')

  const [logUser, {isLoading}] = useRegisterUserMutation();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // when user clicks the submit button this function is called
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(registerData);
    const response = await logUser(registerData);
    console.log(response)
    if (response.error){
      setServerError(response.error.data)
    }
    if (response.data){
      console.log(response.data)
      navigate('/dashboard')

    }
  };

  return (
    <div className="grid place-content-center mt-52">
      <p className="text-2xl ml-8"> Register your account</p>

      {/* email field */}
      <label htmlFor="email" className="text-sm mt-6">
        {" "}
        Email ID
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700 mt-2"> {serverError.email}</p>

      {/* name field */}
      <label htmlFor="name" className="text-sm mt-6">
        {" "}
        Name{" "}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700 mt-2"> {serverError.name}</p>

      {/* date of birth field */}
      <label htmlFor="date_of_birth" className="text-sm mt-6">
        {" "}
        Date of Birth{" "}
      </label>
      <input
        type="date"
        name="date_of_birth"
        id="date_of_birth"
        className="border-2 rounded-lg mt-4 h-8 w-80"
        onChange={handleChange}
      />
      <p className="text-red-700 mt-2"> {serverError.date_of_birth}</p>

      {/* password field */}
      <label htmlFor="password" className="text-sm mt-6">
        password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700 mt-2"> {serverError.password}</p>

      {/* confirm password field */}
      <label htmlFor="confirmation" className="text-sm mt-6">
        Confirm password
      </label>
      <input
        type="password"
        name="password2"
        id="password2"
        className="border-2 rounded-lg w-80 h-8 mt-4"
        onChange={handleChange}
      />
      <p className="text-red-700 mt-2"> {serverError.password2}</p>

      {/* submit button field */}
      <button
        type="submit"
        className="mt-6 w-80 h-8 bg-sky-600 rounded-lg"
        onClick={handleClick}
      >
        {" "}
        Register{" "}
      </button>

      {/* log in redirect */}
      <p className="mt-6 ml-16">
        {" "}
        Have an account?{" "}
        <NavLink to="/signin" className="text-blue-600">
          {" "}
          Log in
        </NavLink>
      </p>
      <p className="text-red-700 mt-2"> {serverError.non_field_errors}</p>
    </div>
  );
}
