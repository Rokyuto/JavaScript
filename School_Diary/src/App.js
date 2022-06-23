import Home from "./Home";
import Dashboard from "./mechanics/Pages/Dashboard";
import{BrowserRouter as Router,Route,Switch} from "react-router-dom"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;