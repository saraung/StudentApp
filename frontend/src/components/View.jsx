import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {



  var[data,setData]=useState()

     useEffect(()=>{
    axios.get("http://localhost:3007/view").then(
        (res)=>{
            console.log(res.data)
            setData(res.data)
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
},[])


const deleteHandler = (id) => {
  axios.delete(`http://localhost:3007/remove/${id}`)
    .then(response => {
      console.log('Item deleted successfully:', response.data);
      // alert(res.data.message)
      // setData(data.filter(item => item._id !== id));
      window.location.reload(true)
    })
    .catch(error => {
      console.error('There was an error deleting the item!', error);
    });
};

var navigate=useNavigate()
const updateHandler = (val) => {

  console.log("clicked",val)
  navigate('/a',{state:{val}})

};


  return (
    <div style={{margin:"4%", alignContent:"center"}}>
    <h1>Student</h1>
    <Grid container spacing={2}>
        {data?.map((val,i)=>{
            return(
                <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        Name : {val.s_name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                        Age : {val.s_age}
                        <br />
                        Roll No :{val.s_rollno}
                        <br />
                        Place : {val.s_place}
                        <br />
                        Dept : { val.s_dept}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => updateHandler(val)}>update</Button>
                        <Button color='error' size="small" onClick={() => deleteHandler(val._id)}>delete</Button>
                    </CardActions>
                    </Card>
                </Grid>
            )
        })}
    </Grid>
</div>
  )
}

export default View