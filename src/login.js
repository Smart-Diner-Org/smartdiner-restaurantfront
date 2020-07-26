import React, { Component } from 'react';
import axios from 'axios';
import userProfile from './helpers/userProfile';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      userData: [],
      message: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const customer = {
      email,
      password
    };

    axios
      .post('http://localhost:9000/api/login', customer)
      // .then(() => {
      //   console.log('Authenticated');

      // })
      .then((response)=>{
        console.log(response);
        console.log(response.data);
        this.setState({
          userData: response.data.userData,
          message: response.data.message
        });
        userProfile.setName(this.state.userData.name);
        console.log(userProfile.getName());
      })
      // .then(data => console.log(data))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
         <h4>Log In </h4>
          <form onSubmit={this.handleSubmit}>
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
                Login
              </button>
            </div>
          </form>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default Login;