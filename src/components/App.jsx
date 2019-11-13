import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Login from './Login';
import Register from './Register';
import User from './User';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const { Content } = Layout;

function App() {
  return (
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
  );
}

export default App;
