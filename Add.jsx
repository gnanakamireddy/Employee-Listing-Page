// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';

// export const Add = () => {
//     const[error,setError] = useState();
//     const n=useNavigate();
//     const log = (e) => {
//         e.preventDefault();
//         var fname=document.myForm.fname.value;
//         var lname=document.myForm.lname.value;
//         var addr=document.myForm.address.value;
//         var mail=document.myForm.email.value;

//         if(fname.length==0 && lname.length==0 && addr.length==0 && mail.length==0){
//             setError("*Required input fields")
//             return false;
//         }
//         else if(fname.length==0 && lname.length!=0 && addr.length!=0 && mail.length!=0){
//             setError("*Firstname cannot be blank");
//             return false;
//         }
        
//         else if(fname.length!=0 && lname.length!=0 && addr.length!=0 && mail.length!=0){
//             setError('');
//             alert('Adding successful');
//             n('/');
//         }
//     }
        
//   return (
//     <div>
//         <form name="myForm" onSubmit={log}>
//             <div className='first'>
//                 <div className='heading'>
//                     <h1><u>Add Employee</u></h1>
//                 </div>
//                 <div className='text'>
//                     <label>First Name</label>
//                     <input type='text' placeholder='Enter firstname' name="fname"/>
//                 </div>
//                 <div className='text'>
//                     <label>Last Name</label>
//                     <input type='text' placeholder='Enter lastname' name="lname"/>
//                 </div>
//                 <div className='text'>
//                     <label>Gender</label>
//                     <input type='radio' name='male'>Male</input>
//                     <input type='radio' name='female'>Female</input>
//                 </div>
//                 <div className='text'>
//                     <label>Address</label>
//                     <input type='text' placeholder='Enter address' name="address"/>
//                 </div>
//                 <div className='text'>
//                     <label>Email</label>
//                     <input type='email' placeholder='Enter email' name='email'/>
//                 </div>
//                 <p className="error">{error}</p>
//                 <div className='button'>
//                     <button>Add</button>
//                 </div>
//             </div>
//         </form>
//     </div>
//   )
// }

import './App.css'
import React,{useState} from 'react'
import { Stack , TextField,Typography,Button} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Grid} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Add = () => {
    const [firstName,setFname]=useState('');
    const [lastName,setLname]=useState('');
    const [gender,setGender]=useState('');
    const [address,setAddress]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    
    const add=(e)=>{
        e.preventDefault();
        const myArray={firstName,lastName,gender,address,email};
        axios({
            method:'post',
            url:"http://localhost:8000/myArray",
            data:myArray
        })
        navigate('/')
        alert('New employee details added')
    }

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
    <Stack spacing={4}>
        <Typography variant="h2">Add Employee Details</Typography>
        <form onSubmit={add}>
        <div className='edit'>
        <Stack direction='row' >
            <Stack direction='column' spacing={3}>
                <TextField label="First Name" required size='small' onChange={e=>setFname(e.target.value)}></TextField>
                <TextField label="Last Name" required size='small' onChange={e=>setLname(e.target.value)}></TextField>

                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">
                        <FormControlLabel value="Female" control={<Radio />} label="Female" onChange={e=>setGender(e.target.value)} />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" onChange={e=>setGender(e.target.value)} />
                    </RadioGroup>
                </FormControl>

                <TextField label="Address" required size='small' onChange={e=>setAddress(e.target.value)}></TextField>
                <TextField label="Email" type="email" required size='small' onChange={e=>setEmail(e.target.value)}></TextField>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='success' type='submit'>Add</Button>
                    <Button variant='contained' color='warning' component={Link} to= '/'>Cancel</Button>
                </Stack>
                
            </Stack>
        </Stack>
        </div>
        </form>
    </Stack>
    </Grid>
  )
}
