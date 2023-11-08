import React from 'react'

import "./styles.css";
import Profile from '../profile/Profile';

const Home = () => {

  return (
    <div className='homeMain'>
    <div className="homeBlueDiv">
     <p>MY PROFILE</p>
    </div>

    <div className="homeMainDiv">
     <Profile />
    </div>
    </div>
  )
}

export default Home