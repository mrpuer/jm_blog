import axios from 'axios';

export default class RealworldService {
  constructor(url) {
    axios.defaults.baseURL = url;
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    const token = localStorage.getItem('token');
    if (token) this.setToken(token);
  }

  setToken = token => {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  };

  clearToken = () => {
    delete axios.defaults.headers.common.Authorization;
  };

  register = async newUser => {
    this.clearToken();
    const {
      data: { user },
    } = await axios.post('/users', { user: newUser });
    localStorage.setItem('token', user.token);
    this.setToken(user.token);
    return user;
  };

  login = async loginData => {
    this.clearToken();
    const {
      data: { user },
    } = await axios.post('/users/login', { user: loginData });
    localStorage.setItem('token', user.token);
    this.setToken(user.token);
    return user;
  };

  getUser = async token => {
    this.setToken(token);
    const resp = await axios.get('/user');
    return resp.data.user;
  };

  getArticles = async params => {
    const resp = await axios.get('/articles', { params });
    return resp.data.articles;
  };

  favoriteArticle = async slug => {
    const resp = await axios.post(`/articles/:${slug}/favorite`);
    return resp.article;
  };

  getArticle = async slug => {
    const resp = await axios.get(`/articles/${slug}`);
    return resp.data.article;
  };

  addArticle = async newArticle => {
    const resp = await axios.post(`/articles`, { article: newArticle });
    return resp.data.article;
  };

  editArticle = async newData => {
    const resp = await axios.put(`/articles/${newData.slug}`, { article: newData });
    return resp.data.article;
  };

  deleteArticle = async slug => axios.delete(`/articles/:${slug}`);

  getProfile = async username => {
    const resp = await axios.get(`/profiles/${username}`);
    return resp.data.profile;
  };
}
