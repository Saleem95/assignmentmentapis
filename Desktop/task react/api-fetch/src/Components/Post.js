import React,{useState ,useEffect} from "react";

function Post() {
    const [fist_name,setFistname] = useState("");
    const [last_name,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    
    function Add(){
        console.log({fist_name,last_name,email,password,username})
        let data ={fist_name,last_name,email,password,username }
        fetch("https://assignmentapis.herokuapp.com/machstatz/get_all_users",
        {method:'POST',
        headers:{'Accept':'application/json','Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then((result)=>{
        console.log(result)
        result.json().then((res)=>{
            console.log(res);
        })
    
    })
}  
    return ( <> 
        <div className="container">  
             <h1 >Add Users</h1>
              <hr />
             <label for="">Fistname</label><br/>
            <input type="text" placeholder="Enter Fistname " name="fistname" value={fist_name}  onChange={(e)=>{setFistname(e.target.value)}} /> <br /><br/>
            <label for="">Lastname</label><br/>
            <input type="text" name="lastname" placeholder="Enter Lastname " value={last_name}  onChange={(e)=>{setLastname(e.target.value)}} /><br /><br/>
            <label for="">Profile</label><br/>
             <select >
             <option value="Frontend">Frontend</option>
             <option value="Backend">Backend</option>
            </select><br /><br/>
            <label for="">Username</label><br/>
            <input type="text" name="username" placeholder="Enter Username " value={username}  onChange={(e)=>{setUsername(e.target.value)}} /><br /><br/>
            <label for="">Email</label><br/>
            <input type="email" name="email" placeholder="Enter Email " value={email}  onChange={(e)=>{setEmail(e.target.value)}} /><br /><br/>
            <label for="">Password</label><br/>
            <input type="password" name="password" placeholder="Enter Password " value={password}  onChange={(e)=>{setPassword(e.target.value)}} /><br /><br/>
            
            <div className="bts">
                <button className="cnc" type="button">Cancel</button>
            <button className="btn" onClick={Add} id="btn2" type="button" >Add</button>   
            </div>
         </div>
        </> );
}

export default Post;


