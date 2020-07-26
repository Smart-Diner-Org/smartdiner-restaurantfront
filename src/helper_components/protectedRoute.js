import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import userProfile from '../helpers/userProfile';

class ProtectedRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: userProfile.getName()
    };
  }

  render() {
    const { component: Component, ...props } = this.props
    return (
      <Route 
        {...props} 
        render={props => (
          this.state.authenticated ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )}
      />
    );
  }
}
export default ProtectedRoute;