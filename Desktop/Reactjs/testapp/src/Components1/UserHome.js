import { Grid, TextField, Button } from '@mui/material'
import { red } from '@mui/material/colors';
import axios from "axios";
import { Typography,Tooltip } from "@mui/material"
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
// import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

const useStyles = makeStyles({

 addColor: {
  backgroundColor: red[400],
  color: "white"
 },

})

const UserHome = () => {
  const classes = useStyles()
  const [items,setItems] = useState([])
  let [data, setData] = useState({
      userName:'',
      name:'',
      companyCode:'',
      godownCode:'',
      storeCode:'',
      contactName:'',
      contactNumber:'',
      mobileNumber:'',
      email:'',
      // id:'',
      // password:'',
      userType:''
  });

  let [status, setStatus] = useState()
    // const navigate = useNavigate();


    function textChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getdata();
    }, [])
    async function getdata() {
      try {
          const item = await axios.get(`http://104.211.240.205/API/api/Users`)
          setItems(item.data);
      } catch (error) {
          console.log("Something is Wrong");
      }
  }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (data.userName === '' || data.name === '' || data.userType === '' || data.companyCode === '' || data.storeCode === '' || data.godownCode === '' ||
            data.contactName === '' || data.contactNumber === '' || data.mobileNumber === '' || data.email === '' ) {
            alert("all fields are mandatory")
        }
   else{
        try {
            await axios.post(`http://104.211.240.205/API/api/Users`, data) 
            setStatus(true);
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
  }

    if (status) {
        return <UserHome />
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://104.211.240.205/API/api/Users?userId=${id}`);
        var newData = items.filter((item) => {
            // console.log(item);
            return item.id !== id;
        })
        setItems(newData);
    }

 return (
  <>
   <Grid container  spacing={4}>
    <Grid item>
     <Box textAlign="center" p={2} className={classes.addColor} mb={2}>
      <Typography variant="h4">Add Users</Typography>
     </Box>
     <form noValidate>
      <Grid ml={1} container spacing={2}>
       <Grid  item >
        <TextField autoComplete="username" name="username" variant="outlined" required fullWidth id="username" label="UserName" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Name" onChange={e => textChange(e)}/>
       </Grid>
       <Grid  item >
        <TextField autoComplete="userType" name="userType" variant="outlined" required fullWidth id="userType" label="userType" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="companycode" name="companycode" variant="outlined" required fullWidth id="companycode" label="CompanyCode" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="storecode" name="storecode" variant="outlined" required fullWidth id="storecode" label="StoreCode" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="pincode" name="pincode" variant="outlined" required fullWidth id="pincode" label="Pincode" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="godowncode" name="godowncode" variant="outlined" required fullWidth id="godowncode" label="GodownCode" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="contactname" name="contactname" variant="outlined" required fullWidth id="contactname" label="ContactName" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="contactnumber" name="contactnumber" variant="outlined" required fullWidth id="contactnumber" label="ContactNumber" onChange={e => textChange(e)} />
       </Grid>
       <Grid item >
        <TextField autoComplete="mobilenumber" name="mobilenumber" variant="outlined" required fullWidth id="mobilenumber" label="MobileNumber" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" onChange={e => textChange(e)}/>
       </Grid>
       
      </Grid>
      <Box textAlign="end"  m={3}>
       <Button type="submit" variant="contained" color="error"  onClick={e => onFormSubmit(e)}>Save</Button>
      </Box>
     </form>
    </Grid>

     
   </Grid>
   <Grid item >
   <Box textAlign="center" className={classes.addColor} mb={2} p={2} >
    <Typography variant="h4">Users List</Typography>
   </Box>
   <table >
        <thead>
        <tr>
          <th>ID..</th>
          <th>Username</th>
          <th>Name</th>
          <th>Usertype</th>
          <th>Companycode</th>
          <th>Godowncode</th>
          <th>Storecode</th>
          <th>Contactname</th>
          <th>Conatctnumber</th>
          <th>Mobilenumber</th>
          <th>Email</th>
          <th>Actions</th>

        </tr>
        </thead>
        <tbody>
        
        {
          items.map((value, i) =>
            <tr key={i} >
              <td>{value.id}</td>
              <td>{value.userName}</td>
              <td>{value.name}</td>
              <td>{value.userType}</td>
              <td>{value.companyCode}</td>
              <td>{value.godownCode}</td>
              <td>{value.storeCode}</td>
              <td>{value.contactName}</td>
              <td>{value.contactNumber}</td>
              <td>{value.mobileNumber}</td>
              <td>{value.email}</td>
              {/* <td>{value.password}</td> */}

              <td>
              <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(value.id)}><DeleteIcon color="secondary" /></IconButton>
            </Tooltip>
            <Tooltip title="Edit">
            <IconButton><Link to={`/uedit/${value.id}`}><EditIcon /></Link></IconButton>
            </Tooltip>     
              </td>
          
            </tr>
          )
        }
         </tbody>
      </table>
   </Grid>
  </>
 )
}

export default UserHome