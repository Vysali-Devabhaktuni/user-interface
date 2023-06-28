const Login = () => {
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