// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
// import Signup from './signup';
// import Login from './login';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';  

import './theme 2.1/assets/css/animate.css'
import './theme 2.1/assets/css/bootstrap.min.css'
import './theme 2.1/assets/css/style.css'
import './theme 2.1/assets/css/default.css'
import './theme 2.1/assets/css/jquery.nice-number.min.css'
import './theme 2.1/assets/css/LineIcons.css'
import './theme 2.1/assets/css/magnific-popup.css'
import './theme 2.1/assets/css/responsive.css'
import './theme 2.1/assets/css/slick.css'
import './theme 2.1/assets/css/style.css'
import './theme 2.1/assets/css/style.css.map'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
/*const routing = (
  <Router>  
    <div> 
      <Route exact path="/" component={App} /> 
      <Route path="/signup" component={Signup} />  
      <Route path="/login" component={Login} />  
    </div>  
  </Router>  
)*/
ReactDOM.render(routes, document.getElementById('root'));


/* eslint-disable import/default */

/*import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { sessionService, sessionReducer } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';
import routes from './routes';
import * as serviceWorker from './serviceWorker';

// Add the sessionReducer
const reducer = combineReducers({
  session: sessionReducer
});

const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));

// Init the session service
sessionService.initSessionService(store, { driver: 'COOKIES' });

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
    </Router>
  </Provider>, document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
