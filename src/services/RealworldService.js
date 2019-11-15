import axios from 'axios';

const URL = 'https://conduit.productionready.io/api/';

export default class realworldService {
  constructor() {
    this.connector = axios.create({
      baseURL: URL,
      timeout: 1000,
      headers: { ContentType: 'application/json; charset=utf-8', Authorization: '' },
    });
  }

  register = async newUser => {
    const registeredUser = await this.connector.post('/users', newUser);
    return registeredUser;
  };

  login = async loginData => {
    const user = await this.connector.post('/users/login', loginData);
    return user;
  };
}
