const Register = () => {
    return(
        <div>
        <label for="fname" class="Register">First name:</label>   
      <input type="text" id="fname" name="fname" placeholder="Enter your First Name">
      <br>
      <label for="lname" class="Register">Last name:</label>
      <input type="text" id="lname" name="lname" placeholder="Enter your Last Name">
      <br>
      <label for="uname" class="Register">Username or Email:</label>
      <input type="text" id="uname" name="uname" placeholder="Enter your Username/Email">
      <br>
      <label for="password" class="Register">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password">
      <br>
    
      <input type="submit" value="Submit">





</div>
    );



}


export default Register;