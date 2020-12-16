import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './AboutMe';
import Contact from './Contact';
import LandingPage from './LandingPage';
import Projects from './Projects';
import '../App.css';

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/aboutme' component={AboutPage} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
    </Switch>
)
    
export default Main;