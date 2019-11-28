import axios from 'axios';

export default class RealworldService {
  constructor(url) {
    axios.defaults.baseURL = url;
    axios.defaults.headers = {
      ContentType: 'application/json; charset=utf-8',
      // Authorization: localStorage.getItem('token'),
    };
  }

  register = async newUser => {
    const {
      data: { user },
    } = await axios.post('/users', { user: newUser });
    localStorage.setItem('token', user.token);
    return user;
  };

  login = async loginData => {
    const {
      data: { user },
    } = await axios.post('/users/login', { user: loginData });
    localStorage.setItem('token', user.token);
    return user;
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
}
