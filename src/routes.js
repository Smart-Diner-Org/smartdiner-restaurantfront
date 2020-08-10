import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import { Route, IndexRoute } from 'react-router';
// import { sessionService } from 'redux-react-session';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Signup from './old_signup'  ;
import Login from './login';
import Home from './home';
import Logout from './logout';
import ProtectedRoute from './helper_components/protectedRoute';
import UnProtectedRoute from './helper_components/unProtectedRoute';
import userProfile from './helpers/userProfile';
import NewHome from './theme 2.1/NewHome'
import SignUp from './signup'

const authenticated = true;
export default (  
  <Router>
    <Switch>
      <div>

        {/* <Route exact path="/" component={App} /> */}
        <UnProtectedRoute path="/oldsignup" component={Signup} />
        <UnProtectedRoute path="/signup" component={SignUp} />
        <UnProtectedRoute path="/login" component={Login} />
        <ProtectedRoute path='/home' component={Home} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={NewHome} />

    </div>
    </Switch>
  </Router>
);

/*import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { sessionService } from 'redux-react-session';
import App from './App';
import Signup from './signup'  ;
import Login from './login';
import Home from './home';


// const routing = (  
//   <Router>  
//     <div> 
//       <Route exact path="/" component={App} />
//       <IndexRoute onEnter={sessionService.checkAuth} component={Home} />
//       <Route path="/signup" component={Signup} />
//       <Route path="/login" component={Login} />  
//     </div>  
//   </Router>  
// )  
// ReactDOM.render(routing, document.getElementById('root'));


export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={sessionService.checkAuth} component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />  
  </Route>
);*/