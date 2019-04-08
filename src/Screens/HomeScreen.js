import React, {Component} from 'react';
import '../App.css'
import Header from '../Components/HeaderFooter/Header';
import Slider from '../Components/Slider/index';


export default class HomeScreen extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Slider/>
            </div>
        );
    }
}
