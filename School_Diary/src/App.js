import Home from "./Home";
import Dashboard from "./mechanics/Pages/Dashboard";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom"
const App = () => {

  return (
   <div className="Container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Dashboard" component={Dashboard}/>

      </Switch>
    </Router>

   </div>
  );
}

export default App;