import axios from 'axios';

const URL = 'https://conduit.productionready.io/api/';

export default class RealworldService {
  constructor() {
    axios.defaults.baseURL = URL;
    axios.defaults.headers = { ContentType: 'application/json; charset=utf-8' };
  }

  register = async newUser => {
    const {
      data: { user },
    } = await axios.post('/users', { user: newUser });
    // axios.defaults.headers.Authorization = user.token;
    return user;
  };

  login = async loginData => {
    const {
      data: { user },
    } = await axios.post('/users/login', { user: loginData });
    // axios.defaults.headers.Authorization = user.token;
    return user;
  };
}
