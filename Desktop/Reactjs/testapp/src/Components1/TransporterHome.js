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
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles({
 addColor: {
  //  width:1200,
   backgroundColor: red[400],
   color: "white"
  },

  tableHead: {
   fontWeight: "bold",
   fontSize: 1,
   border:1
  },
 
})

const TransporterHome = () => {
 const classes = useStyles();
 const [items, setItems] = useState([]);
 const [data, setData] = useState({
    code: "",
    name:"",
    address:"",
    city:"",
    pincode:"",
    stateCode:"",
    gstIn:"",
    contactName:"",
    contactNumber:"",
    mobileNumber:"",
    emailID: "",
    companyCode:""
 });
 const [status, setStatus] = useState();
 const navigate = useNavigate();

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
      const item = await axios.get(`http://104.211.240.205/API/api/Transporters`)
     return setItems(item.data);
  } catch (error) {
      console.log("Something is Wrong");
  }
}

 async function onFormSubmit(e) {
  e.preventDefault();
  if(data.code==='' || data.name === '' || data.address === '' || data.city === '' || data.pincode === '' || data.stateCode === '' || data.gstIn === '' || data.stateCode === '' ||
         data.contactName === '' || data.contactNumber === '' ||  data.mobileNumber === '' || data.emailID === '' || data.companyCode === '' ){
            alert("all fields are mandatory")
        }
        else{ 
  try {
   await axios.post(`http://104.211.240.205/API/api/Transporters` ,{ 
    ...data,
    pincode: parseInt(data.pincode)
  })
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
}
 
 if (status) {
  return <TransporterHome />
 }

  const handleDelete = async id => {
   await axios.delete(`http://104.211.240.205/API/api/Transporters?Code=${id}`);
   var newData = items.filter((item) => {
    // console.log(item);
    return item.code !== id;
   })
   setItems(newData);
  }
 
//   function updateitem(id) {
//     navigate(`/edit/${id}`)
// }


 return (
  <>
   <Grid container  >
   <Grid   >
    <Grid item  >
     <Box  textAlign="center" p={2} className={classes.addColor} mb={3}>
      <Typography variant="h4">Add Transporter</Typography>
     </Box>
     <form noValidate>
      <Grid ml={1}  container spacing={2}>
       <Grid item >
        <TextField autoComplete="code" name="code" variant="outlined" required fullWidth id="code" label="Code" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Name" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="address" name="address" variant="outlined" required fullWidth id="address" label="Address" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="city" name="city" variant="outlined" required fullWidth id="city" label="City" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="pincode" name="pincode" variant="outlined" required fullWidth id="pincode" label="Pincode" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="stateCode" name="stateCode" variant="outlined" required fullWidth id="stateCode" label="StateCode" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="gstIn" name="gstIn" variant="outlined" required fullWidth id="gstIn" label="GstIn" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="contactName" name="contactName" variant="outlined" required fullWidth id="contactName" label="ContactName" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="contactNumber" name="contactNumber" variant="outlined" required fullWidth id="contactNumber" label="ContactNumber" onChange={e => textChange(e)} />
       </Grid>
       <Grid item >
        <TextField autoComplete="mobileNumber" name="mobileNumber" variant="outlined" required fullWidth id="mobileNumber" label="MobileNumber" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="emailID" name="emailID" variant="outlined" required fullWidth id="emailID" label="EmailID" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item >
        <TextField autoComplete="companyCode" name="companyCode" variant="outlined" required fullWidth id="companyCode" label="companyCode" onChange={e => textChange(e)}/>
       </Grid>
      </Grid>
      <Box textAlign="end" ml={2} m={3}>
       <Button type="submit" variant="contained" color="error"  onClick={e => onFormSubmit(e)}>Save</Button>
      </Box>
     </form>
    </Grid>
   
   </Grid> <br/>

   <Grid item >
   <Box  textAlign="center" p={2}  className={classes.addColor}>
    <Typography   variant="h4">Transporter List</Typography>
   </Box> <br/>
   <table>
     <tbody>
      <tr>     
        <th>No..</th>
        <th>Code</th>
        <th>Name</th>
        <th>Address</th>
        <th>City</th>
        <th>Pincode</th>
        <th>Gst</th>
        <th>Statecode</th>
        <th>Contactname</th>
        <th>Contactnumber</th>
        <th>Mobilenumber</th>
        <th>Email</th>
        <th>Companycode</th>
        <th>Actions</th>
      </tr>
      {items.map((value, i) => {
        return (

          <tr key={i} >
            <td>{i + 1}</td>
            <td>{value.code}</td>
            <td>{value.name}</td>
            <td>{value.address}</td>
            <td>{value.city}</td>
            <td>{value.pincode}</td>
            <td>{value.gstIn}</td>
            <td>{value.stateCode}</td>
            <td>{value.contactName}</td>
            <td>{value.contactNumber}</td>
            <td>{value.mobileNumber}</td>
            <td>{value.emailID}</td>
            <td>{value.companyCode}</td>

            <td>
            <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(data.code)}><DeleteIcon color="secondary" /></IconButton>
            </Tooltip>
            <Tooltip title="Edit">
            <IconButton><Link to={`/tedit/${value.code}`}><EditIcon /></Link></IconButton>
            </Tooltip>
              </td> 
          </tr>
        )
      }

      )}
        </tbody>
      </table>
   </Grid>
   </Grid>
  </>
 )
}

export default TransporterHome;