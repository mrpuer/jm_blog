import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Layout } from 'antd';

import reducer from './reducers';
import { Register, Login } from './pages';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ArticlesPage from './articles/ArticlesPage';
import ErrorBoundary from './error/ErrorBoundary';

const { Content } = Layout;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router basename={process.env.PUBLIC_URL}>
          <Layout>
            <AppHeader />
            <Content className="main">
              <ArticlesPage />
              <Login />
              <Register />
            </Content>
            <AppFooter className="footer" />
          </Layout>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
