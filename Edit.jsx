import React,{useEffect, useState} from 'react'
import { Stack , TextField,Typography,Button,Grid} from '@mui/material'

import { Link,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export const Edit = () => {
    const {id} = useParams();
    const [firstName,setFname]=useState('');
    const [lastName,setLname]=useState('');
    const [gender,setGender]=useState('');
    const [address,setAddress]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();
    const edit=(e)=>{
      e.preventDefault();
      const myArray={firstName,lastName,gender,address,email};
      axios({
        method:'put',
        url:"http://localhost:8000/myArray/"+id,
        data:myArray
      })
      // navigate('/')
      alert('New employee details edited')
      navigate('/')
    
    }

    useEffect(()=>{
      axios({
          method:'get',
          url:"http://localhost:8000/myArray/"+id,
      }).then(res=>{
        setFname(res.data.firstName)
        setLname(res.data.lastName)
        setGender(res.data.gender)
        setAddress(res.data.address)
        setEmail(res.data.email)
      })
    },[])

  return (
    <Grid container justifyContent={'center'}>
        <Stack spacing={4}>
        <Typography variant="h5" color={'purple'}><u>Edit Employee Details</u></Typography>
        
        <Stack direction='row' >
            <Stack direction='column' spacing={3}>
                <TextField label="First Name" required size='small' value={firstName} onChange={e=>setFname(e.target.value)}></TextField>
                <TextField label="Last Name" required size='small' value={lastName} onChange={e=>setLname(e.target.value)}></TextField>
                <TextField label="Gender" required size='small' value={gender} onChange={e=>setGender(e.target.value)}></TextField>
                <TextField label="Address" required size='small' value={address} onChange={e=>setAddress(e.target.value)}></TextField>
                <TextField label="Email" type="email" required size='small' value={email} onChange={e=>setEmail(e.target.value)}></TextField>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='success' type='submit' onClick={edit}>Save</Button>
                    <Button variant='contained' color='warning' component={Link} to= '/'>Back</Button>
                </Stack>
                
            </Stack>
        </Stack>
        
      </Stack>
    </Grid>
  )
}
