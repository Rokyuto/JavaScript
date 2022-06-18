import logo from './uktc.svg';
import './App.css';

// Wesite Functionality

function App() {
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
        </div>
      </header>
    </div>
  );
}

export default App;
