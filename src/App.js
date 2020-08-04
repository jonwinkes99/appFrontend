import React from 'react';
import {Route} from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume"
import Contacts from "./components/Contacts"
import './App.css';
import Home from './components';
//import { Contacts } from '@material-ui/icons';
//import { Router } from '@material-ui/icons';

function App() {    
   return (
     <>
    <CssBaseline/>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route exact path="/contacts" component={Contacts} />
    </>
  );
}; 


export default App;
