import React, {Component} from 'react';
import '../App.css'
import Header from '../Components/HomeScreenComps/HeaderFooter/Header';
import Slider from '../Components/Slider/index';
import ServicesIntro from '../Components/HomeScreenComps/ServicesBriefIntro'

export default class HomeScreen extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <ServicesIntro/>
            </div>
        );
    }
}
