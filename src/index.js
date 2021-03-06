import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { Router, Switch, Route, Link } from 'react-router-dom';
// add IndexRoute above and the helpers below

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store, {history} from './store';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import Profile from './pages/Auth/profile';
import ProductsMain from './pages/Products/main';
import UserMain from './pages/Users/main';

ReactDOM.render(
  <Provider store={store}>

    <Router history={history}>
      <div>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/app" component={App}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/products" component={ProductsMain}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/users" component={UserMain}/>
      </Switch>
      </div>
    </Router>
    </Provider>
    , 
    document.getElementById('root'));
registerServiceWorker();