import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = (props) => {
var [data,setData]=useState({
    s_name:'',
    s_age:'',
    s_rollno:'',
    s_place:'',
    s_department:'',
});
var nav = useNavigate();
var location = useLocation();
console.log("location",location.state);
useEffect(()=>{
  if(location.state!=null){
    setData({...data,
      s_name: location.state.val.s_name,
      s_age: location.state.val.s_age,
      s_rollno: location.state.val.s_rollno,
      s_place: location.state.val.s_place,
      s_department: location.state.val.s_department

    })
  }
},[]);
const inputHandler = (e) => {
    console.log(e.target.value)
    setData({...data, [e.target.name]: e.target.value})
    console.log(data);
}

const submitHandler = ()=>{
  console.log("btn clicked");
  if(location.state!=null){
    axios.put("http://localhost:3007/edit"+location.state.val._id,data)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
      Navigate('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  else{
    axios.post("http://localhost:3007/add",data)
  .then((res)=>{
    console.log(res)
    alert(res.data.message)
    nav('/')
  })

  .catch((err)=>console.log(err))

  }
}

  return (
    <div style={{marginTop:'140px'}}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4} >
        <TextField fullWidth label='Name' onChange={inputHandler} name="s_name" value={data.s_name}/>
        <br /><br />
        <TextField fullWidth label='Age' onChange={inputHandler} name="s_age" value={data.s_age}/>
        <br /><br />
        <TextField fullWidth label='RollNo' onChange={inputHandler} name="s_rollno" value={data.s_rollno}/>
        <br /><br />
        <TextField fullWidth label='Place' onChange={inputHandler} name="s_place" value={data.s_place}/>
        <br /><br />
        <TextField fullWidth label='Department' onChange={inputHandler} name="s_department" value={data.s_department}/>
        <br /><br />
        <Button variant="contained" fullWidth color="success" onClick={submitHandler}>SUBMIT</Button>
        </Grid>

        <Grid item xs={12} md={4}></Grid>
        </Grid>
    </div>
  )
}

export default Add
