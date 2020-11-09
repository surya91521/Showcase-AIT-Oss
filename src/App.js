import React from "react";
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Courses from "./components/pages/Courses";
import Coding from "./components/pages/Coding"
import Internships from "./components/pages/Internships"
import Awards from "./components/pages/Awards"


function App(){
 
 
  return (
    
  
    <>
    
    <Router >
      <Switch>
        
        <Route path='/' exact component={Home} />
        <Route path='/Projects' component ={Projects}/>
        <Route path='/Skills' component={Skills}/>
        <Route path='/Courses' component={Courses}/>
        <Route path='/Coding' component={Coding}/>
        <Route path='/Internships' component={Internships}/>
        <Route path='/Awards' component={Awards}/>
      </Switch>
    </Router>
  </>
  );
}



export default App;
