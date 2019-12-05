import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Layout } from 'antd';
import {
  RegisterPage,
  LoginPage,
  ArticlesPage,
  ArticlePage,
  ProfilePage,
  AddArticlePage,
  EditArticlePage,
} from './pages';
import reducer from './reducers';
import AppHeader from './blocks/AppHeader';
import AppFooter from './blocks/AppFooter';
import ServerError from './errors/ServerError';

const { Content } = Layout;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <ServerError>
          <Layout>
            <AppHeader />
            <Content className="main">
              <ArticlesPage />
              <AddArticlePage />
              <EditArticlePage />
              <ProfilePage />
              <ArticlePage />
              <LoginPage />
              <RegisterPage />
            </Content>
            <AppFooter className="footer" />
          </Layout>
        </ServerError>
      </Router>
    </Provider>
  );
};

export default App;
