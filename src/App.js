
import './Navbar.css';
import Navbar from './Navbar';
import Navbartext from './Navbartext';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
   
    <Router>
    <div className = "navbar">
    <Switch>
      
    <Route exact path = {["/", "/Login", "/Register" ]}>
     <Navbar  /> 
    
     </Route>
     <Route exact path = {["/users/:userid" ]}>
     <Navbartext/>
     </Route>
    </Switch>
     </div>
     </Router>
  );
}

export default App;
