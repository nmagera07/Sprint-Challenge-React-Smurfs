import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Welcome to Smurf Village!</h1>
        <img src="https://www.bongfish.com/wp-content/uploads/2017/04/SV_header.jpg" />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="smurf">
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              <button onClick={e => this.props.deleteSmurf(e,smurf)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
