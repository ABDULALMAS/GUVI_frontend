import React,{ useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import * as actionType from "../../constants/actionTypes";


import arrowRight  from "../../assets/arrowRight.svg"
 
import "./styles.css";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  return (
    <div className="sideBarMain">
    <div className="dashBoard">
    <p>Dashboard</p>
    </div>

    <div className="myProfile">
        <img src={arrowRight}/>
        <p>My Profile</p>
    </div>

    <p ><strong className="logOut" onClick={logout}>Log Out</strong></p>
    </div>
  )
}

export default SideBar