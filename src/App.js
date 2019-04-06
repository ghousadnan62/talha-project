import React, {Component} from 'react';
import Header from './Components/HeaderFooter/Header'
import Slider from './Components/Slider/index'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App" style={{
                height:'2000px'
            }}>
                <Header/>
                <Slider/>
            </div>
        );
    }
}

export default App;
