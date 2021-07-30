import React, { Component } from 'react';
import './App.css';
import Loading from './components/loading/Loading';
import Feed from './components/feed/Feed';

const POST_COUNT = 50;

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      people: [],
      loadStatus: 0
    }
    this.fetchPeopleData = this.fetchPeopleData.bind(this);
  }

  componentDidMount() {

    const txtgen = require('txtgen');
    this.fetchPeopleData(txtgen,0);
  }

  fetchPeopleData(txtgen, i) {
    this.setState({ loadStatus: i });
    if(i===POST_COUNT) {
      this.setState({isLoading: false});
      console.log(this.state.people);
      return;
    }

    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {

      data = data.results[0];
      
      const newPerson = {
        name: data.name.first+' '+data.name.last,
        photo: data.picture.large,
        text: txtgen.sentence()
      }

      const newPeople = [];
      this.state.people.forEach(
        person => newPeople.push(person)
      );
      newPeople.push(newPerson);

      this.setState({people: newPeople});
      
      this.fetchPeopleData(txtgen, i+1);
    })
  }

  render() {
    return (
      <div className="app">
        {
          this.state.isLoading?
          <Loading status={this.state.loadStatus} postCount={POST_COUNT}/>:
          <Feed data={this.state.people}/>
        }
      </div>
    );
  }
}

export default App;
