import logo from './uktc.svg';
import './App.css';
import React, {Component} from 'react'

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="School-logo" alt="UKTC_Logo" /> {/* UKTC School Logo */}
        <div className="LogReg_Container"> {/* Login-Register Container */}
          <div className="LogReg_Buttons_Container">
            {/* Login-Register Buttons */}
            <span className="login_button">Login</span>
            <span className="register_button">Register</span>
          </div>
          <div className="LoginContainer" >
            <input type="text" id="studentName" className="studentInput" placeholder="Email or username" minLength="17"></input> {/* Student School Number Input Field */}
            <input type="password" id="studentPassword" className="studentInput" placeholder="Password" ></input> {/* Student Pasword Input Field */}
            <input type="submit" value="Login" id="studentSubmit" className="studentSubmit"></input>  {/* Login Button */}
          </div>
          <div className="RegisterContainer"></div>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
