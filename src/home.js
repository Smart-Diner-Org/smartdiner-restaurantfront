import React, { Component } from 'react';

class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   email: '',
  //   //   password: ''
  //   // };
  // }

  // handleInputChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const { email, password } = this.state;

  //   const customer = {
  //     email,
  //     password
  //   };

  //   axios
  //     .post('http://localhost:9000/api/login', customer)
  //     .then(() => console.log('Authenticated'))
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  render() {
    return (
      <div>
        <br />
        <div className="container">
         <h4>Home </h4>
          
        </div>
      </div>
    );
  }
}

export default Home;