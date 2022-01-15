import React, {useState,useEffect} from "react";

function Get() {
    
    const [data,setData] =useState([{}])

     useEffect(
         ()=>{
            getlist(); 
        },[])
     console.log(data);

     function getlist(){
        fetch("https://assignmentapis.herokuapp.com/machstatz/get_all_users")
        .then(res =>{res.json().then(result=>{
            //   console.log(result);
              setData(result)
            })
        })
        .catch(err =>{
            console.log(err)
        })
     }
       function deleteuser(_id){
           fetch(`https://assignmentapis.herokuapp.com/machstatz/get_all_users${_id}`,
           {
               method:'DELETE'
           }).then((res)=>{
               res.json().then((data1) =>{
                   console.log(data1)
                   getlist();
               })
           })
           
       }

    return ( <>
           <div className="user">
                 <h1><u>Users</u></h1>
             { 
                 data.map((item)=> 
                           
                               <table>
                               <tr>
                               <td>
                               <div className="card">
                                 <h2>{item.username}</h2> 
                                 <div className="but">
                                 <button onClick={deleteuser} type="button">Delete</button>
                                 </div>
                               </div>
                               </td>        
                           </tr>
                           </table>    
                )  
             }  
             </div> 
    </> );
}

export default Get;