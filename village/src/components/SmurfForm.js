import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  handleInputChange = e => {
    this.setState({ 
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <div className="SmurfForm">
        <h2>Add A Smurf!</h2>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="text"
          />
          <button type="submit">Add to the village</button>
          <Link to="/"><button type="submit">Go back to the village</button></Link>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
