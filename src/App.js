import React from 'react';
import {Route} from "react-router-dom"
//import UserStore from "/UserStore"
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
import Contacts from "./components/Contacts"
import './App.css';
import Home from './components';
import Punk from "./components/Punk"
import Login from './components/Login'


function App() {    
   return (
     <>
    <CssBaseline className='mainCSS'/>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contacts" component={Contacts}/>
      <Route path="/Punk" component={Punk}/>
      <Route path="/Login" component={Login}/>
    </>
  );
}; 


export default App;
