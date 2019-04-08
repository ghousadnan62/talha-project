import React, {Component} from 'react';
import './App.css'
import HomeScreen from './Screens/HomeScreen'

class App extends Component {
    render() {
        return (
            <div className="App" style={{
                height:'2000px'
            }}>
                <HomeScreen/>
            </div>
        );
    }
}

export default App;
