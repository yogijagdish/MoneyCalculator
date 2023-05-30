import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { add_data } from "../images/image";

import { useGetTitleApiQuery } from "../services/authAPI";

import { getToken } from "../services/userTokenService";
import ImageDisplay from "./ImageDisplay";

export default function Cards() {

    const [addTitle,setAddTitle] = useState(false);

    const [userData,setUserData] = useState([0]);

    const { access_token } = getToken();

    const {data,isSuccess} = useGetTitleApiQuery(access_token);

    useEffect(()=>{
      if (data && isSuccess) {
        setUserData(data.data)
        console.log(data.data)
      }
    })

    const handleClick = () => {
        setAddTitle(true)
    }
    const handleClose = () => {
        setAddTitle(false)
    }

    const baseUrl = 'http://127.0.0.1:8000'
  


     return(
        <div className="flex flex-row flex-wrap gap-16 ml-8">

<div className="flex flex-row flex-wrap gap-16 ml-8">

        {userData.map((item) => (
          
          <div key={item.id} className="border-2 h-64 w-64 rounded-lg">
        <ImageDisplay imageurl={baseUrl+item.image} />
        <p className="text-2xl ml-28 mt-2"> {item.title} </p>
        <p className="text-sm ml-2 mt-2"> {item.description}</p>
        </div>

))}
</div>
        <div className="border-dashed border-2 h-64 w-64 rounded-lg" onClick={handleClick}>
        <img src={add_data} alt="plus pic" className="h-32 w-32 ml-16 mt-16"/>
        <p className="ml-20 mt-2"> Add Title </p>
        </div>

        {addTitle && (
            <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-black opacity-50 fixed inset-0"></div>
            <div className="bg-white rounded-lg p-6">
              <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={handleClose}>
                &times;
              </span>
              <div className="text-center">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" className="bg-green-400"/>
                <h1 className="text-2xl font-bold mb-4">Add Title Component</h1>
                {/* Add content to the modal */}
              </div>
            </div>
          </div>
        )}
        </div>
    )
}