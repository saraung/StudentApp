import { Button, Grid, TextField } from '@mui/material'
import { responsiveProperty } from '@mui/material/styles/cssUtils';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Main = (props) => {

  var[data,setData]=useState({
    s_name:'',
    s_age:'',
    s_rollno:'',
    s_place:'',
    s_dept:'',

  })

  var location =useLocation()
  console.log("location",location.state)

var navigate=useNavigate()


useEffect(()=>{
  if(location.state!=null)
  {
    setData({...data,
      s_name:location.state.val.s_name,
      s_age:location.state.val.s_age,
      s_rollno:location.state.val.s_rollno,
      s_place:location.state.val.s_place,
      s_dept:location.state.val.s_dept,
    })
  }
},[])

  const inputHandler=(e)=>{
    console.log(e.target.value);
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
  };


  // useEffect(()=>{
  //   axios.post('localhost:3007/add',data)
  //   .then(())
  //   .catch()
  // },[])


  const submitHandler=(e)=>{
    console.log('button clicked')
   if(location.state!=null)
   {
    axios.put('http://localhost:3007/edit/'+location.state.val._id,data)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
      
    })
    .catch((err)=>{
      console.log(err)
    })
    console.log(data);

   }
   else{
    axios.post('http://localhost:3007/add',data)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
     
    })
    .catch((err)=>{
      console.log(err)
    })
    console.log(data);
   }
   navigate("/")
  };

  // useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products/category/jewelery").then(
  //       (res)=>{
  //           console.log(res.data)
  //           setData(res.data)
  //       }
  //   ).catch(
  //       (error)=>{
  //           console.log(error)
  //       }
  //   )
// },[])




  return (

    <div style={{marginLeft:'150px',marginRight:'150px'}}>
    <Grid container spacing={2}>
      <Grid item xs={12} maxWidth={4}></Grid>
      <Grid item xs={12} maxWidth={4}>
        <TextField name='s_name' onChange={inputHandler} value={data.s_name} variant='outlined' fullWidth label='Name' /><br /><br />
        <TextField type='number' name='s_age' onChange={inputHandler} value={data.s_age} variant='outlined' fullWidth label='Age' /><br /><br />
        <TextField type='number' name='s_rollno' onChange={inputHandler} value={data.s_rollno} variant='outlined' fullWidth label='Roll No' /><br /><br />
        <TextField name='s_place' onChange={inputHandler} value={data.s_place} variant='outlined' fullWidth label='Place' /><br /><br />
        <TextField name='s_dept' onChange={inputHandler} value={data.s_dept} variant='outlined' fullWidth label='Department' /><br /><br />

        <Button color='secondary' fullWidth variant='contained' onClick={submitHandler}>Submit</Button>
      </Grid>
      <Grid item xs={12} maxWidth={4}></Grid>
    </Grid>
    </div>

  )
}

export default Main




// import { Button, Grid, TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const Main = () => {
//   const [data, setData] = useState({
//     s_name: '',
//     s_age: '',
//     s_rollno: '',
//     s_place: '',
//     s_dept: ''
//   });

//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       axios.get(`http://localhost:3007/view/${id}`)
//         .then((res) => {
//           setData(res.data);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     }
//   }, [id]);

//   const inputHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const url = id ? `http://localhost:3007/update/${id}` : 'http://localhost:3007/add';
//     const method = id ? 'put' : 'post';

//     axios[method](url, data)
//       .then((res) => {
//         alert(res.data.message);
//         navigate('/');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <div style={{ marginLeft: '150px', marginRight: '150px' }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} maxWidth={4}></Grid>
//         <Grid item xs={12} maxWidth={4}>
//           <TextField name='s_name' onChange={inputHandler} value={data.s_name} variant='outlined' fullWidth label='Name' /><br /><br />
//           <TextField type='number' name='s_age' onChange={inputHandler} value={data.s_age} variant='outlined' fullWidth label='Age' /><br /><br />
//           <TextField type='number' name='s_rollno' onChange={inputHandler} value={data.s_rollno} variant='outlined' fullWidth label='Roll No' /><br /><br />
//           <TextField name='s_place' onChange={inputHandler} value={data.s_place} variant='outlined' fullWidth label='Place' /><br /><br />
//           <TextField name='s_dept' onChange={inputHandler} value={data.s_dept} variant='outlined' fullWidth label='Department' /><br /><br />
//           <Button color='secondary' fullWidth variant='contained' onClick={submitHandler}>Submit</Button>
//         </Grid>
//         <Grid item xs={12} maxWidth={4}></Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Main;
