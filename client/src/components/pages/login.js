import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData} from "../../main.js";


const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data)
          storeInlocalStorage(data);
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  const storeInlocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate("/Profile")
  }

    return(
        <div>
            <label for="uname" class="Login" > Username or Email:</label>
    <input type="text" id="uname" name="uname" placeholder="Enter your Username/Email" class="Login"></input>
    <br></br>
    <label for="password" class="login"> Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" class="Login"></input>
    <br></br>
    <input type="submit" value="Submit"></input>

       </div>
    
    );
  }


export default Login;