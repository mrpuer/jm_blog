export default class TestService {
  constructor() {
    this.users = {};
    this.token = '12345';
    this.id = 1;
  }

  register = newUser => {
    const fullUser = { token: this.token, id: this.id, ...newUser };
    this.users[newUser.email] = fullUser;
    return fullUser;
  };

  login = loginData => {
    const currentUser = this.users[loginData.email];
    if (currentUser && currentUser.password === loginData.password) return currentUser;
    return null;
  };
}
