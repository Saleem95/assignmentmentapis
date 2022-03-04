import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

import SupplierHome from "./Components/SupplierHome";
import TransporterHome from "./Components/TransporterHome";
import GodownHome from "./Components/GodownHome";
// import RetailerHome from "./Components/RetailerHome";
import StoreHome from "./Components/StoreHome";
import CompanyHome from "./Components/CompanyHome";
import UserHome from "./Components/UserHome"
import Edit from "./Components/Edit";
import Tedit from "./Components/Tedit";
import Gedit from "./Components/Gedit";
// import Redit from "./Components/Redit";
import Sedit from "./Components/Sedit";
import Cedit from "./Components/Cedit";
import Uedit from "./Components/Uedit";
// import { Reddit } from '@material-ui/icons';
// const useStyles = makeStyles({
  //   addColor: {
  //     backgroundColor: red[400],
  //     color: "white",
  //     // padding:"5"
  //    },
    
  //  })
function App() {
  
//  const classes = useStyles();

  const [status,setStatus] = useState('')
    const history = useNavigate();

    const handleClick = (path) => {
      history(path);
      setStatus(false);
    };
    if(status) {
      return <App />
    }
   return (
     <> 

<div className='App'>
<div  className='page'>
  <input type="radio" onClick={() => handleClick("/supplier")} /> <label for="supplier">Supplier</label>
  <input type="radio" onClick={() => handleClick("/transporter")} /><label for="transporter">Transporter</label>
  <input type="radio" onClick={() => handleClick("/godown")} /><label for="godown">Godown</label>
  <input type="radio" onClick={() => handleClick("/retailer")} /><label for="retailer">Retailer</label>
  <input type="radio" onClick={() => handleClick("/store")} /><label for="store" >Store </label  >
  <input type="radio" onClick={() => handleClick("/companyInfo")} /><label for="companyinfo" >CompanyInfo </label  >
  <input type="radio" onClick={() => handleClick("/users")} /><label for="users" >Users </label  >
  <input type="radio" onClick={() => handleClick("/cetagory")} /><label for="cetagory" >Cetagory </label  >
  <input type="radio" onClick={() => handleClick("/details")} /><label for="details" >Details </label  >
  <input type="radio" onClick={() => handleClick("/main")} /><label for="main" >Main </label  >
</div>
    
            <Routes>
              <Route  exact path='/supplier' element={<SupplierHome  />} />
              <Route exact path='/edit/:id' element={<Edit  />} />
              <Route exact path='/transporter' element={<TransporterHome />} />
              <Route exact path='/tedit/:id' element={<Tedit  />} />
              <Route exact path='/godown' element={<GodownHome  />} />
              <Route exact path='/gedit/:id' element={<Gedit  />} /> 
              {/* <Route exact path='/retailer' element={<RetailerHome  />} />  */}
               <Route exact path='/store' element={<StoreHome  />} /> 
              <Route exact path='/sedit/:id' element={<Sedit  />} />
               <Route exact path='/companyInfo' element={<CompanyHome  />} /> 
              <Route exact path='/cedit/:id' element={<Cedit  />} />
              <Route exact path='/users' element={<UserHome  />} />
              <Route exact path='/uedit/:id' element={<Uedit  />} /> 
              {/* <Route exact path='/category' element={<Category  />} />
              <Route exact path='/details' element={<Details  />} />
              <Route exact path='/main' element={<Main  />} /> */}

            </Routes>
     
         </div>
         <br/>
     </>
   )
}

export default App;