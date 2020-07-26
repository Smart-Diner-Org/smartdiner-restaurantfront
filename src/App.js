import React from 'react'
import './App.css';  
import { Link } from 'react-router-dom'  
import axios from 'axios';

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      "<div className='error-msg'>{props.message}</div>"
    )
  }
  return null;
}

class App extends React.Component {
  state = {
    name: '', nameValid: false,
    email: '', emailValid: false,
    mobile: '', mobileValid: false,
    password: '', passwordValid: false,
    passwordConfirm: '', passwordConfirmValid: false,
    formValid: false,
    errorMsg: {}
  }

  validateForm = () => {
    const {nameValid, emailValid, mobileValid, passwordValid, passwordConfirmValid} = this.state;
    this.setState({
      formValid: nameValid && emailValid && mobileValid && passwordValid && passwordConfirmValid
    })
  }

  updatename = (name) => {
    this.setState({name}, this.validatename)
  }

  validatename = () => {
    const {name} = this.state;
    let nameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (name.length < 3) {
      nameValid = false;
      errorMsg.name = 'Must be at least 3 characters long'
    }

    this.setState({nameValid, errorMsg}, this.validateForm)
  }

  updateEmail = (email) => {
    this.setState({email}, this.validateEmail)
  }

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }


  updateMobile = (mobile) => {
    this.setState({mobile}, this.validateMobile)
  }

  validateMobile = () => {
    const {mobile} = this.state;
    let mobileValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (mobile.length !== 10){
      mobileValid = false;
      errorMsg.mobile = 'Invalid mobile format'
    }

    this.setState({mobileValid, errorMsg}, this.validateForm)
  } 
  updatePassword = (password) => {
    this.setState({password}, this.validatePassword);
  }

  validatePassword = () => {
    const {password} = this.state;
    let passwordValid = true;
    let errorMsg = {...this.state.errorMsg}

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Password must be at least 6 characters long';
    } else if (!/\d/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain a digit';
    } else if (!/[!@#$%^&*]/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain special character: !@#$%^&*';
    }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }

  updatePasswordConfirm = (passwordConfirm) => {
    this.setState({passwordConfirm}, this.validatePasswordConfirm)
  }

  validatePasswordConfirm = () => {
    const {passwordConfirm, password} = this.state;
    let passwordConfirmValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = 'Passwords do not match'
    }

    this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
  }
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
      <div className="App">
        <header>
          Sign Up With Validation
        </header>
        <main role='main'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>name</label>
              < ValidationMessage valid={this.state.nameValid} message={this.state.errorMsg.name} />
              <input type='text' id='name' name='name' className='form-field'
              value={this.state.name} onChange={(e) => this.updatename(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
              <input type='email' id='email' name='email' className='form-field'
              value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='mobile'>Mobile</label>
              < ValidationMessage valid={this.state.mobileValid} message={this.state.errorMsg.mobile} />
              <input type='number' id='mobile' name='mobile' className='form-field'
              value={this.state.mobile} onChange={(e) => this.updateMobile(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
              <input type='password' id='password' name='password' className='form-field'
              value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password-confirmation'>Password Confirmation</label>
              < ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
              <input type='password' id='password-confirmation' name='password-confirmation' className='form-field' value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)}/>
            </div>
            <div className='form-controls'>
              <button className='button' type='submit' disabled={!this.state.formValid}>Sign Up</button>
            </div>
          </form>
        </main>
        <h1>Smart Diner</h1>  
        <ul>  
          <li>  
            <Link to="/">old Home</Link>  
          </li>  
          <li>
            <Link to="/newhome">new Home</Link>
          </li>
          <li>  
            <Link to="/signup">Signup</Link>  
          </li>  
          <li>  
            <Link to="/login">Login</Link>  
          </li>  
        </ul> 

      </div>
    );
  }
}

export default App  


/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", api2Res: "no" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
    fetch("http://localhost:9000/testAPI/api2")
      .then(res => res.text())
      .then(res => this.setState({ api2Res: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.api2Res}</p>
      </div>
    );
  }
}

export default App;*/
