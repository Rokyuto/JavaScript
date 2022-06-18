import logo from './uktc.svg';
import './App.css';

// Wesite Functionality

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="School-logo" alt="UKTC_Logo" /> {/* UKTC School Logo */}
        <div className="LogReg_Container"></div> {/* Login-Register Container */}
      </header>
    </div>
  );
}

export default App;
