import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link} from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      }) 

  }

  addSmurf = event => {
    // add code to create the smurf using the api
    axios
      .post('http://localhost:3333/smurfs', event)
      .then(res => {
        console.log(res) 
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteSmurf = (e, smurfs) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:3333/smurfs/${smurfs.id}`, smurfs)
      .then(res => {
        console.log(res)
      this.setState({
        smurfs: res.data
      })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav}/>
        <Route 
          path="/"
          render={props => (
            <Smurfs 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf}
            />
          )} 
        />
        
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm 
              addSmurf={this.addSmurf}
              
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;
