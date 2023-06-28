const Login = () => {
    return(
        <div>
            <label for="uname" class="Login">Username or Email:</label>
    <input type="text" id="uname" name="uname" placeholder="Enter your Username/Email" class="Login">
    <br>
    <label for="password" class="login">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter your password" class="Login">
    <br>
    <input type="submit" value="Submit">

        </div>
    
    );
  }


export default Login;