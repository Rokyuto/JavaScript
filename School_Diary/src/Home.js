import logo from './uktc.svg';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  //const var name|, mechanic name | state - true/false
  const [showLogin , setShowLogin] = useState(true); // Show/Hide Mechanic
  let navigate=useNavigate();
  
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="School-logo" alt="UKTC_Logo" /> {/* UKTC School Logo */}
        <div className="LogReg_Container"> {/* Login-Register Container */}

          <div className="LogReg_Buttons_Container">
            {/* Login-Register Buttons */}
            <span className="login_button" onClick={() => setShowLogin(true)} >Login</span> {/* On Login Button Click => Show Login Container */}
            <span className="register_button" onClick = {() => setShowLogin(false)} >Register</span>  {/* On Register Button Click => Hide Login Container */}
          </div>

          {/* Login Container */}
          { showLogin && <div className="LoginContainer" > {/* By Default Show Login Container ; showLogin = true */}
            <input type="text" id="studentName" className="studentInput" placeholder="Email or username" minLength="17"></input> {/* Student School Number Input Field */}
            <input type="password" id="studentPassword" className="studentInput" placeholder="Password" ></input> {/* Student Pasword Input Field */}
            {/* <input type="submit" value="Login" id="studentSubmit" className="studentSubmit" onClick={"/Dashboard"} ></input> Login Button */}
            <button id="studentSubmit" className="studentSubmit" onClick={()=>{navigate('/Dashboard')}}>Login</button>
          </div> }

          {/* Register Container */}
          <div className="RegisterContainer"></div>
        </div>
      </header>
    </div>
  );
}

export default Home;