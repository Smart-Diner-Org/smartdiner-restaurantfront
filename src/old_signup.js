import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      mobile: '',
      password: ''
          };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, mobile, password } = this.state;

    const customer = {
      name,
      email,
      mobile,
      password
    };

    axios
      .post('http://localhost:9000/api/register', customer)
      .then(() => console.log('Customer created'))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <h4>Sign up</h4>
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="email"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="mobile"
                placeholder="mobile"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
            <p className="App-intro">{this.state.apiResponse}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;