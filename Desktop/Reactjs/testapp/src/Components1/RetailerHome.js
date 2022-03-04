 import { Grid, TextField, Button } from '@mui/material'
import { red, green } from '@mui/material/colors';
import axios from "axios";
// import { Grid } from '@mui/material';
import { Typography,Tooltip } from "@mui/material"
import { makeStyles } from '@mui/material/styles';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";


const useStyles = makeStyles({
 headingColor: {
  backgroundColor: red[500],
  color: "white"
 },
 addColor: {
  backgroundColor: green[400],
  color: "white"
 },
 listColor: {
   backgroundColor: red[400],
   color: "white"
  },
  tableHeadCell: {
   color: "white",
   fontWeight: "bold",
   fontSize: 16
  },
 
})

const Home = () => {
 const classes = useStyles();
 const [items, SetItems] = useState([]);
 const [data, SetData] = useState({
    code: "",
    name:"",
    address:"",
    city:"",
    statecode:"",
    gst:"",
    contactname:"",
    contactnumber:"",
    mobilenumber:"",
    email: "",
    companycode:""
 });
 const [status, setStatus] = useState();

 function textChange(e) {
  SetData({
   ...data,
   [e.target.name]: e.target.value
  })
//   console.log(data)
 }

 useEffect(() => {
   async function getAll() {
    try {
     const items = await axios.get("http://104.211.240.205/API/api/Supplier")
     // console.log(students.items);
     SetItems(items.items);
    } catch (error) {
     console.log("Something is Wrong");
    }
   }
   getAll();
  }, [])

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://104.211.240.205/API/api/Supplier`, data)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 
 if (status) {
  return <Home />
 }

  const handleDelete = async id => {
   await axios.delete(`http://104.211.240.205/API/api/Supplier/${id}`);
   var newData = data.filter((item) => {
    // console.log(item);
    return item.id !== id;
   })
   SetData(newData);
  }
 
 return (
  <>
   <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Typography variant="h2">Admin Page</Typography>
   </Box>
   <Grid container  spacing={4}>
    <Grid item md={3} xs={4}>
     <Box textAlign="center" p={2} className={classes.addColor} mb={2}>
      <Typography variant="h4">Add Supplier</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={4}>
        <TextField autoComplete="code" name="code" variant="outlined" required fullWidth id="code" label="Code" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="name" name="name" variant="outlined" required fullWidth id="name" label="Name" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="address" name="address" variant="outlined" required fullWidth id="address" label="Address" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item xs={4}>
        <TextField autoComplete="city" name="city" variant="outlined" required fullWidth id="city" label="City" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="pincode" name="pincode" variant="outlined" required fullWidth id="pincode" label="Pincode" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="statecode" name="statecode" variant="outlined" required fullWidth id="statecode" label="StateCode" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="gst" name="gst" variant="outlined" required fullWidth id="gst" label="Gst" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="contactname" name="contactname" variant="outlined" required fullWidth id="contactname" label="ContactName" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item xs={4}>
        <TextField autoComplete="contactnumber" name="contactnumber" variant="outlined" required fullWidth id="contactnumber" label="ContactNumber Address" onChange={e => textChange(e)} />
       </Grid><Grid item xs={4}>
        <TextField autoComplete="mobilenumber" name="mobilenumber" variant="outlined" required fullWidth id="mobilenumber" label="MobileNumber" onChange={e => textChange(e)}/>
       </Grid>
       <Grid item xs={4}>
        <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" onChange={e => textChange(e)}/>
       </Grid><Grid item xs={4}>
        <TextField autoComplete="companycode" name="companycode" variant="outlined" required fullWidth id="companycode" label="companyCode" onChange={e => textChange(e)}/>
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
      </Box>
     </form>
    </Grid>

   </Grid>
   <Box textAlign="center" p={2} className={classes.listColor}>
    <Typography variant="h4">Supplier List</Typography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Supplier Code</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Address</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>City</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>StateCode</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>PinCode</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>ContactName</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>ContactNumber</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>MobileNumber</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>CompanyCode</TableCell>

      </TableRow>
     </TableHead>
     <TableBody>
      {
       items.map((data, i) => {
        return (
         <TableRow key={i}>
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="center">{data.code}</TableCell>
          <TableCell align="center">{data.name}</TableCell>
          <TableCell align="center">{data.address}</TableCell>
          <TableCell align="center">{data.city}</TableCell>
          <TableCell align="center">{data.pincode}</TableCell>
          <TableCell align="center">{data.stateCode}</TableCell>
          <TableCell align="center">{data.gstIn}</TableCell>
          <TableCell align="center">{data.contactName}</TableCell>
          <TableCell align="center">{data.contactNumber}</TableCell>
          <TableCell align="center">{data.mobileNumber}</TableCell>
          <TableCell align="center">{data.emailID}</TableCell>
          <TableCell align="center">{data.companyCode}</TableCell>


          <TableCell align="center">
           {/* <Tooltip title="View">
            <IconButton><Link to={`/view/${data.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip> */}
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${data.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(data.code)}><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default Home