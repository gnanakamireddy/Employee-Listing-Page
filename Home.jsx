import React, { useEffect, useState } from 'react'
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Button,Grid,TablePagination,TextField,InputAdornment  } from '@mui/material'
import './App.css';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from '@mui/material';
import { Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Home = () => {

    const[emp,setEmp]=useState([]);
    const [search,setSearch]=useState('');
    useEffect(()=>{
        axios({
            method:'get',
            url:"http://localhost:8000/myArray"
        }).then(res=>{
            setEmp(res.data);
        })
    },[])


    const handleDelete=(id)=>{
        if(window.confirm("Do you really want to delete?")){
            axios({
                method:'delete',
                url:"http://localhost:8000/myArray/"+id,
            })
            alert("Deleted successfully")
            window.location.reload();
        }
    }


    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);
    const handleChangePage = (event, newpage) => {
        pagechange(newpage);
    };
    const handleChangeRowsPerPage = (event) => {
        rowperpagechange(event.target.value);
        pagechange(0);
    };

  return (
    <div>
        <div className='heading'><h2><u>Employee Details</u></h2></div>
        <Grid container display={'flex'} justifyContent={'center'}>
        <TableContainer sx={{maxHeight:'500px', maxWidth:"900px"}}>
        <div className='heading2'>
            <Button variant="contained" size='small' sx={{backgroundColor:"success.light"}}  color="success" component={Link} to= '/add'>Add</Button>
            <TextField label="Search"size='small' sx={{marginTop:'3px'}} 
             value={search} onChange={(e)=>setSearch(e.target.value)}
                InputProps={{endAdornment:<InputAdornment position='end'><SearchIcon/></InputAdornment>}}>
            </TextField>
        </div>
        
            <Table sx={{marginLeft:'10px',marginTop:'4px'}}>                                                      
                <TableHead sx={{}}>
                    <TableRow sx={{backgroundColor:'grey'}}>
                        <TableCell sx={{fontWeight: 'bold',color:'white'}}>First Name</TableCell>
                        <TableCell sx={{fontWeight: 'bold',color:'white'}}>Last Name</TableCell>
                        <TableCell sx={{fontWeight: 'bold',color:'white'}}>Gender</TableCell>
                        <TableCell sx={{fontWeight: 'bold',color:'white'}}>Address</TableCell>
                        <TableCell sx={{fontWeight: 'bold',color:'white'}}>Email</TableCell>
                        <TableCell sx={{fontWeight: 'bold',color:'white'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{backgroundColor:'white'}}>
                    {
                        emp.slice(page * rowperpage, page * rowperpage + rowperpage)

                         .filter(data=>(data.firstName || data.lastName).toLowerCase().includes(search.toLowerCase()))

                        // .filter((data)=>{
                        //     return search.toLowerCase()===''? data : data.firstName.toLowerCase().include(search);
                        // })

                    .map(data=>(
                        <TableRow key={data.id}>
                            <TableCell>{data.firstName}</TableCell>
                            <TableCell>{data.lastName}</TableCell>
                            <TableCell>{data.gender}</TableCell>
                            <TableCell>{data.address}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" sx={{backgroundColor:"primary.light"}} size='small' component={Link} to= {'/read/'+data.id}>Read</Button> &nbsp;
                                <Button variant="contained" sx={{backgroundColor:"warning.light"}} color='warning'  size='small' component={Link} to= {'/edit/'+data.id}>Edit</Button> &nbsp;
                                <Button variant="contained" sx={{backgroundColor:"error.light"}} color="error" size='small' onClick={()=>handleDelete(data.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={emp.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowperpage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5,10,15,20]}
            />
        </TableContainer>
        </Grid>
    </div>
  )
}

// if(window.confirm("Do you really want to delete?")){
//     axios({
//         method:'delete',
//         url:"http://localhost:8000/myArray/"+id,
//     })
//     alert("Deleted successfully")
//     window.location.reload();
//     }
// }

// const [del,setDel]=useState(false)
// const handleDelete=(id)=>{
//     <Dialog del={del} onClose={()=>setDel(false)}>
//         <DialogTitle>Do you want to delete?</DialogTitle>
//         <DialogContent>
//             <DialogContentText>Are you sure to delete?This record will be deleted</DialogContentText>
//         </DialogContent>
//         <DialogActions>
//             <Button component={Link} to='/'>Cancel</Button>
//             <Button onClick={()=>setDel(true)}>Delete</Button>
//         </DialogActions>
//     </Dialog>
//     if(del){
//         axios({
//             method:'delete',
//             url:"http://localhost:8000/myArray/"+id,
//         })
//     }
    
// }



//onClick={()=>handleDelete(data.id)}

// const handleDelete=(id)=>{
//     alert("Do you really want to delete?")
//     // const newList=emp.filter(li=>li.id!=id);
//     // setEmp(newList);
//     // axios({
//     //     method:'delete',
//     //     url:"http://localhost:8000/myArray/id",
//     //     //data:emp.filter(li=>li.id!=id)
        
//     // })
// }

//onClick={()=>handleEdit(data.id)}

//component={Link} to= '/edit+data.id'
 
