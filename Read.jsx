import { Button ,TextField} from '@mui/material';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link , useParams} from 'react-router-dom';
import './App.css'

export const Read = () => {
    const {id} = useParams();
    const [firstName,setFname]=useState();
    const [lastName,setLname]=useState();
    const [gender,setGender]=useState();
    const [address,setAddress]=useState();
    const [email,setEmail]=useState();
    
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
    <div className='read'>
        <h2><u>Employee {firstName} Details</u></h2>
        <p><b>First Name</b> : {firstName} </p>
        <p><b>Last Name</b> : {lastName}</p>
        <p><b>Gender </b>: {gender}</p>
        <p><b>Address</b> : {address}</p>
        <p><b>Email</b> : {email}</p>
        <Button variant='contained' sx={{backgroundColor:"secondary.light"}} color="secondary" size='small' component={Link} to= {'/'}>Close</Button>
    </div>
  )
}

