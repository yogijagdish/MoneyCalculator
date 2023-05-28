import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { add_data } from "../images/image";

export default function Cards() {

    const [addTitle,setAddTitle] = useState(false);

    const handleClick = () => {
        setAddTitle(true)
    }
    const handleClose = () => {
        setAddTitle(false)
    }

     return(
        <div className="flex flex-row flex-wrap gap-16 ml-8">

        <div className="border-dashed border-2 h-64 w-64 rounded-lg" onClick={handleClick}>
        <img src={add_data} alt="plus pic" className="h-32 w-32 ml-16 mt-16"/>
        <p className="ml-20 mt-2"> Add Title </p>
        </div>
        <div className="border-2 h-64 w-64 rounded-lg">
        this is card2
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