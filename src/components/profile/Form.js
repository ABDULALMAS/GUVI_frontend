// import React , { useState}from 'react'

// import {
//     Avatar,
//     Button,
//     Paper,
//     Grid,
//     Typography,
//     Container,
//     TextField,
//     Dialog,
//     MenuItem,
    
    
//   } from "@material-ui/core";
//   import { useDispatch, useSelector } from "react-redux";
//   import { useNavigate } from "react-router-dom";
//   import { createProfile } from '../../actions/profile';

//   import useStyles from "./styles";



// const Form = ({ currentId, setCurrentId}) => {
//    const [edit , setEdit] = useState(false);
//    const dispatch = useDispatch();
//    const navigate = useNavigate();


//     const [profileData, setProfileData] = useState({
//         photo: "",
//         name: "",
//         email: "",
//         age: "",
//         gender: "",
//         DOB: "",
//         phoneNumber: ""
//        })
//     const classes = useStyles();


//     const clear = () => {
//         setCurrentId(0);
//         setProfileData({photo: "",
//         name: "",
//         email: "",
//         age: "",
//         gender: "",
//         DOB: "",
//         phoneNumber: "" });
//       };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(currentId === 0)
//         dispatch(createProfile({ ...profileData }, navigate));
//         setEdit(false);
//         // setUpload(false);
//     }
  
//   return (
//     <Dialog open={edit}>
        
//             <Paper className={classes.paper}>
//                 <form  autoComplete="off"
//         noValidate
//         className={`${classes.root} ${classes.form}`}
//         onSubmit={handleSubmit}>
//                 <Typography variant="h6">
//               Editing Profile
//         </Typography>
               
//                <TextField
//                className={classes.TextField} 
//                name='name'
//                variant="outlined"
//                label="Your Name"
//                fullWidth
//                value={profileData.name}
//                onChange={(e) => setProfileData({ ...profileData, name: e.target.value})}
//                />
//                <TextField 
//                 className={classes.TextField} 
//                name='email'
//                variant="outlined"
//                label="Your Email"
//                fullWidth
//                value={profileData.email}
//                onChange={(e) => setProfileData({ ...profileData, email: e.target.value})}
//                />
             
//                <TextField 
//                 className={classes.TextField} 
//                name='age'
//                variant="outlined"
//                label="Your Age"
//                fullWidth
//                value={profileData.age}
//                onChange={(e) => setProfileData({ ...profileData, age: e.target.value})}
//                />
//                <TextField 
//                 className={classes.TextField} 
//                 select
//                name='gender'
//                variant="outlined"
//                label="Your Gender"
//                fullWidth
//                value={profileData.gender}
//                onChange={(e) => setProfileData({ ...profileData, gender: e.target.value})}
//                >
//                 <MenuItem value="male">Male </MenuItem>
//                 <MenuItem value="female">Female</MenuItem>
//                 </TextField>

//                 <TextField 
//                 type='date'
//                 className={classes.TextField} 
//                name='DOB'
//                variant="outlined"
//                label="Date Of Birth"
//                fullWidth
//                value={profileData.DOB}
//                onChange={(e) => setProfileData({ ...profileData, DOB: e.target.value})}
//                InputLabelProps={{ shrink: true }}
//                />

// <TextField 
//                 className={classes.TextField} 
//                name='phoneNumber'
//                variant="outlined"
//                label="Phone Number"
//                fullWidth
//                value={profileData.phoneNumber}
//                onChange={(e) => setProfileData({ ...profileData, phoneNumber: e.target.value})}
//                />
     

//      <Button
//           className={classes.buttonSubmit}
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           fullWidth
//         >
//           Submit
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="small"
//           onClick={clear}
//           fullWidth
//         >
//           Clear
//         </Button>
//                 </form>
//             </Paper>
        
//      </Dialog>
//   )
// }

// export default Form