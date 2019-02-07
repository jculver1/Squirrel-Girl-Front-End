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

  nextQuote = () => {
  let id = this.state.id
  if(this.state.id < this.state.originalCount -1){
    id = this.state.id + 1
  }else{
    id = 0
  }
    this.setState({
      id: id,
      quote: this.state.data[this.state.id].quote,
      img: this.state.data[this.state.id].img 
    })
  }

  render() {
    return (
      <div class='row'>
        <Card img={this.state.img} quote={this.state.quote} nextQuote={this.nextQuote}/>
      </div>
    )
  }
}

export default App;
