import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../actions/authActions";
interface props{
}

const dispatch = useDispatch();
const Logout = () => {
    dispatch(logOut());
};


export default Logout;

