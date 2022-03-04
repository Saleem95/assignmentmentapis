import { Typography, Box, makeStyles, Grid, TextField, Button } from '@mui/material';
import { red, green } from '@mui/material/colors';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
 headingColor: {
  backgroundColor: red[500],
  color: "white"
 },
 addColor: {
  backgroundColor: green[400],
  color: "white"
 },

});

const Redit = () => {
 const classes = useStyles();
 const { id } = useParams();
 const navigate = useNavigate();
 const [data, SetData] = useState({
  code: "",
  name:"",
  address:"",
  city:"",
  pincode:"",
  statecode:"",
  gst:"",
  contactname:"",
  contactnumber:"",
  mobilenumber:"",
  companycode:"",
  email: ""
 });
 useEffect(() => {
  async function getData() {
   try {
    const data = await axios.get(`http://104.211.240.205/API/api/Supplier/${id}`)
    // console.log(student.data);
    SetData(data.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getData();
 }, [id]);

 function textChange(e) {
  SetData({
   ...data,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.put(`http://104.211.240.205/API/api/Supplier/${id}`, data)
   navigate("/")
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 function handleClick() {
    navigate("/")
 }
 return (
  <>
   <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
    <Typography variant="h2">React CRUD with API Call</Typography>
   </Box>

   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addColor} mb={2}>
      <Typography variant="h4">Edit Supplier</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="code" name="code" variant="outlined" required fullWidth id="code" label="Code" value={data.code} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Name" value={data.name} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="address" name="address" variant="outlined" required fullWidth id="address" label="Address" value={data.address} onChange={e => textChange(e)}/>
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="city" name="city" variant="outlined" required fullWidth id="city" label="City" value={data.city} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="pincode" name="pincode" variant="outlined" required fullWidth id="pincode" label="Pincode" value={data.pincode} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="statecode" name="statecode" variant="outlined" required fullWidth id="statecode" label="StateCode" value={data.statecode} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="gst" name="gst" variant="outlined" required fullWidth id="gst" label="Gst" value={data.gst} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="contactname" name="contactname" variant="outlined" required fullWidth id="contactname" label="ContactName" value={data.contactname} onChange={e => textChange(e)}/>
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="contactnumber" name="contactnumber" variant="outlined" required fullWidth id="contactnumber" label="ContactNumber Address" value={data.contactnumber} onChange={e => textChange(e)} />
       </Grid><Grid item xs={12}>
        <TextField autoComplete="mobilenumber" name="mobilenumber" variant="outlined" required fullWidth id="mobilenumber" label="MobileNumber" value={data.mobilenumber} onChange={e => textChange(e)}/>
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" value={data.email} onChange={e => textChange(e)}/>
       </Grid><Grid item xs={12}>
        <TextField autoComplete="companycode" name="companycode" variant="outlined" required fullWidth id="companycode" label="companyCode" value={data.companycode} onChange={e => textChange(e)}/>
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
      </Box>
     </form>
     <Box m={3} textAlign="center">
      <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
     </Box>
    </Grid>
   </Grid >
  </>
 )
}

export default Redit