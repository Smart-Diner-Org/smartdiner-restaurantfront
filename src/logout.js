import React, { Component } from 'react';
import userProfile from './helpers/userProfile';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.enableRedirect = this.enableRedirect.bind(this);

    this.state = {
      canRedirect: false,
    };

    this.timer = setTimeout(this.enableRedirect, 250);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  enableRedirect() {
    this.setState({canRedirect: true});
  }

  clearUserData(){
    userProfile.clearUser();
  }

  render() {
    const {canRedirect} = this.state;
    this.clearUserData();
    if (!this.state.canRedirect) {
      return null;
    }
    return <Redirect to='/login' />
  }
}

export default Logout;