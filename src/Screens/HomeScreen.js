import React, {Component} from 'react';
import '../App.css'
import Slider from '../Components/HomeScreenComps/Slider/index';
import ServicesIntro from '../Components/HomeScreenComps/ServicesBriefIntro'
import AboutUsContainer from '../Components/HomeScreenComps/AboutUsContainer';


export default class HomeScreen extends Component {

    render() {
        return (
            <div>
                <Slider/>
                <ServicesIntro/>
                <AboutUsContainer/>
            </div>
        );
    }
}
