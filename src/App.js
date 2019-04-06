import React, { Component } from 'react';
import Header from './Components/HeaderFooter/Header'



class App extends Component {
  render() {
    return (
      <div style={{
        height: '1500px',
        backgroundColor:'blue'
      }}>
        <Header/>
      </div>
    );
  }
}

export default App;
