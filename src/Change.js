import React from 'react';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import UserHome from './UserHome';
import Coursepage from './Coursepage';
import Search from './Search'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function Change (){
    return (
        <Router>
        <div className="content">
            <Switch>
                <Route exact path="/">
                <Home/>
                </Route> 
                <Route exact path="/Register">
                <Register/>
                </Route>
                <Route exact path="/Login">
                <Login/>
                </Route>
                <Route exact path="/users/:userid">
                <UserHome/>
                </Route>
                <Route exact path="/course/:courseid">
                <Coursepage />
                </Route>
                <Route exact path="/searchresults">
                <Search />
                </Route>
            </Switch>
        </div>
        
        </Router>
    );
}
export default Change;