import React, { Component } from 'react';
import './App.css';
import Loading from './components/loading/Loading';
import Feed from './Feed'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      people: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="app">
        {this.state.isLoading?<Loading/>:<Feed/>}
      </div>
    );
  }
}

export default App;
