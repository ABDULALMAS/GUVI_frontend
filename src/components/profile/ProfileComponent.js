import React, { useState} from 'react'

const ProfileComponent = ({ profile }) => {
    // const [edit, setEdit] = useState(false);
    const [currentId , setCurrentId] = useState(null);
     



   

        
    
  return (
    
     <>

    <div className="profileNameMain">
    <div className="profileNameDiv">
        <h3 className="profileHeadText">Your Name</h3>
        <p className="profileSubText">{profile.name}</p>
    </div>
    <div className="profileEmailDiv">
     <h3 className="profileHeadText">Email</h3>
     <p className="profileSubText">{profile.email}</p>
    </div>
    <div className="profileAgeDiv">
    <h3 className="profileHeadText">Your Age</h3>
    <p className="profileSubText">{profile.age}</p>
    </div>
    <div className="profileGenderDiv">
     <h3 className="profileHeadText">Gender</h3>
     <p className="profileSubText">{profile.gender}</p>
    </div>
    <div className="profileDOBDiv">
     <h3 className="profileHeadText">Date Of Birth</h3>
     <p className="profileSubText">{profile.DOB}</p>
    </div>
    <div className="profileMobileDiv">
     <h3 className="profileHeadText">Phone Number</h3>
     <p className="profileSubText">{profile.phoneNumber}</p>
    </div>
 </div>


              </>
              
  )
}

export default ProfileComponent