import React from "react";
import { deleteToken } from "../services/userTokenService";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../features/authSlice";
import { useNavigate } from "react-router-dom";


export default function Logout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        deleteToken();
        dispatch(unSetUserToken({access_token:null}));
        navigate('/')

    }
    return(
        <>
        <button type="submit" className="border-2 rounded-lg w-24 h-8 bg-blue-400" onClick={handleClick}> Logout</button>
        </>
    )
}