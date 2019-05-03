import React, {Component} from 'react';
import '../App.css'
import Header from '../Components/HomeScreenComps/Header/Header';
import Slider from '../Components/Slider/index';
import ServicesIntro from '../Components/HomeScreenComps/ServicesBriefIntro'
import FooterComp from "../Components/HomeScreenComps/FooterComp";
import AboutUsContainer from '../Components/HomeScreenComps/AboutUsContainer';


export default class HomeScreen extends Component {

    render() {
        return (
            <div>
                <Slider/>
                <ServicesIntro/>
                <AboutUsContainer/>
                <FooterComp/>
            </div>
        );
    }
}
