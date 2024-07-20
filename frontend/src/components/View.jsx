import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const View = () => {
  var [students,setStudents] = useState([]);
  var navigate = useNavigate();
  useEffect(()=>{
    axios
    .get("http://localhost:3007/view")
    .then((res)=>{
      console.log(res.data);
      setStudents(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
    const delValue = (id) =>{
      console.log("delete clicked",id);
      axios.delete("http://localhost:3007/remove/"+id)
      .then((res)=>{
        console.log(res);
        alert(res.data.message);
        window.location.reload(true);

      })
      .catch((err)=>console.log(err));
  }

  const updateVlue=(val)=>{
    console.log("clicked",val);
    navigate('/d', {state: { val } } );
  }
  return (
    <div>
           <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>RollNo</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Action</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((val,i)=>{
                  return(
                    <TableRow key={i}>
                      <TableCell>{val.s_name}</TableCell>
                      <TableCell>{val.s_age}</TableCell>
                      <TableCell>{val.s_rollno}</TableCell>
                      <TableCell>{val.s_place}</TableCell>
                      <TableCell>{val.s_department}</TableCell>
                      <TableCell>
                        <Button
                        variant="contained"
                        color="error"
                        onClick={()=>{delValue(val._id)}}>

                          Delete
                        </Button>
                      
                      
                      <Button
                        variant="contained"
                        color="error"
                        onClick={()=>{updateVlue(val)}}>

                          Update
                        </Button>
                      </TableCell>

                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
           </TableContainer>
    </div>
  )
}

export default View
