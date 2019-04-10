import React, {Component} from 'react';
import '../App.css'
import Header from '../Components/HomeScreenComps/HeaderFooter/Header';
import Slider from '../Components/Slider/index';
import ServicesIntro from '../Components/HomeScreenComps/ServicesBriefIntro'
import FooterComp from "../Components/HomeScreenComps/FooterComp";
import AboutUsComp from '../Components/HomeScreenComps/AboutUsComp';



export default class HomeScreen extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <ServicesIntro/>
                <AboutUsComp/>
                <FooterComp/>
            </div>
        );
    }
}
