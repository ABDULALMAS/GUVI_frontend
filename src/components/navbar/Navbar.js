import React,{ useState} from 'react'
import notification from "../../assets/Notification.svg";
import navAvatar from "../../assets/navAvatar.png";
import arrowDown from "../../assets/arrowDown.svg"
import SideBar from '../sideBar/SideBar';

import "./styles.css";
import Home from '../home/Home';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <>
    <div className="navMain">
     <div className="navProfile">
        <img src={notification} className="notificationBell"/>

        <div className="navProfileDiv">
            <div className="navProfileAvatar">
              <img src={navAvatar}/>
            </div>
            <div className="navProfileText">
              <h3>Welcome back,</h3>
              <h2>{ user.result.name}</h2>
            </div>
            <img src={arrowDown} className="arrowDown"/>
        </div>
        </div>    
        
        </div>

        
        <SideBar />
       
        <Home />
        </>
  )
}

export default Navbar