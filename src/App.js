import React, { Component } from 'react';
import './App.css';
import Card from './components/card'

class App extends Component {


  serverName = 'http://localhost:3005/'

  constructor(props) {
    super(props);
    this.state = {
      data: {},

    };
  }

  async componentDidMount(){
    fetch(this.serverName)
      .then(data => data.json())
      .then(JSONdata => {
        this.setState({
          data: JSONdata,
          originalCount: JSONdata.length,
          id: JSONdata[0].id,
          quote: JSONdata[0].quote,
          img: JSONdata[0].img
        })
      })
    }

  // nextQuote = () => {

  //   this.setState({
  //     id: this.state.id + 1,
  //     quote: this.state.data[id].quote,
  //     img: this.state.data[id].img 
  //   })
  // }

  render() {
    return (
      <div>
        <Card img={this.state.img} quote={this.state.quote}/>
      </div>
    )
  }
}

export default App;
