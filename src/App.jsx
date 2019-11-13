import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import Login from './Login';
import Register from './Register';
import User from './User';

function App() {
  return (
    <Row type="flex" justify="start">
      <Col span={8}>
        <Router>
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
        </Router>
      </Col>
    </Row>
  );
}

export default App;
