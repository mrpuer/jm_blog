import axios from 'axios';

export default class RealworldService {
  constructor(url) {
    this.url = url;
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
    const resp = await axios.get(`/articles/:${slug}/favorite`);
    console.log(resp.article);
    return resp.article;
  };
}