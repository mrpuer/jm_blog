import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Layout } from 'antd';

import userReducer from '../reducers/userReducer';
import { Register, User, Login } from '../pages';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const { Content } = Layout;
const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <AppHeader />
          <Content className="main">
            <Login />
            <Register />
            <User />
          </Content>
          <AppFooter className="footer" />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
