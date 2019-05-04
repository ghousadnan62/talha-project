import React, {Component} from 'react';
import './App.css'
import HomeScreen from './Screens/HomeScreen';
import AboutUsScreen from './Screens/AboutUsScreen';
import BlogScreen from './Screens/BlogScreen';
import LocationScreen from './Screens/LocationsScreen';
import OurAssosiatesScreen from './Screens/OurAssosiatesScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import ServicesScreen from './Screens/ServicesScreen';

import Header from "./Components/HomeScreenComps/Header/Header";
import Footer from "./Components/HomeScreenComps/FooterComp";

import {BrowserRouter as Router,Route} from "react-router-dom";



class App extends Component {
    render() {
        return (

            <div className="App">
                <Router>
                    <Header/>
                    <Route exact path={"/"} component={HomeScreen}/>
                    <Route path={"/AboutUs"} component={AboutUsScreen}/>
                    <Route path={"/Blog"} component={BlogScreen}/>
                    <Route path={"/Locations"} component={LocationScreen}/>
                    <Route path={"/OurAssociates"} component={OurAssosiatesScreen}/>
                    <Route path={"/Projects"} component={ProjectsScreen}/>
                    <Route path={"/OurServices"} component={ServicesScreen}/>
                    <Footer/>
                </Router>


            </div>

        );
    }
}

export default App;
