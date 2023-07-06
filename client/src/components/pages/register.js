import { fetchData} from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();



  const [user,setuser] = useState({
  
      fname:'',
      lname:'',
      uname:'',
      password:''
  })
  
  const {fname,lnamename,uname,password} = user;
  
  const onChange =(e) => setuser({...user,[e.target.name]: e.target.value})
  
  const onSubmit =(e) => {
  
      e.preventDefault();
      
  
      fetchData("/user/register",
          
      {
        uname,
        password
      },
       "POST")
  
     .then((data) => {
      if(!data.message){
  
        navigate("/profile")
      }
  
     })
  .catch((error)=>{
  
    console.log(error)
  })
  }
  
  return(
        <div>   
        <label for="fname" class="Register"> First name:</label>   
      <input type="text" id="fname" name="fname" placeholder="Enter your First Name"></input>
      <br></br>
      <label for="lname" class="Register"> Last name:</label>
      <input type="text" id="lname" name="lname" placeholder="Enter your Last Name"></input>
      <br></br>
      <label for="uname" class="Register"> Username or Email:</label>
      <input type="text" id="uname" name="uname" placeholder="Enter your Username/Email"></input> 
      <br></br>
      <label for="password" class="Register"> Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password"></input>
      <br></br>
    
      <input type="submit" value="Submit"></input> 

       </div>
    );



}


export default Register;