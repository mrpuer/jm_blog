import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Layout } from 'antd';

import RealworldService from '../services/RealworldService';
import userReducer from '../reducers/userReduser';

import Login from './Login';
import Register from './Register';
import User from './User';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const { Content } = Layout;

const service = new RealworldService();

service
  .login({
    user: {
      email: 'jake@jake.jake',
      password: 'jakejake',
    },
  })
  .then(console.log)
  .catch(console.log);

const store = createStore(userReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <AppHeader />
          <Content className="main">
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <User />
              </Route>
            </Switch>
          </Content>
          <AppFooter className="footer" />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
