import React, { Component } from 'react';
import './App.css';
import Card from './components/card'

class App extends Component {


  serverName = 'http://localhost:3005/'

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {},

  //   };
  // }

  async componentDidMount(){
    fetch(this.serverName)
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          data: JSONdata,
          originalCount: JSONdata.length,
          quotes: JSONdata.map(sg => sg.quote),
          img: JSONdata.map(sg => sg.img)
        })
      })
    }

  current

  render() {
    return (
      <div>
        <Card/>
      </div>
    )
  }
}

export default App;
