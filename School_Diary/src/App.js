import Home from "./Home";
import ErrorPage from "./mechanics/Pages/ErrorPage";
import Dashboard from "./mechanics/Pages/Dashboard";
import{Route,Routes} from "react-router-dom"
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    
  ); 
}

export default App;