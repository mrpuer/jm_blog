// import { loginSchema, registerSchema } from '../schemas/schemas';

export default class TestService {
  constructor() {
    this.users = {};
    this.token = '12345';
    this.id = 1;
  }

  register = newUser => {
    // registerSchema.validate(newUser).catch(console.log);
    const fullUser = { token: this.token, id: this.id, ...newUser };
    this.users[newUser.email] = fullUser;
    return fullUser;
  };

  login = loginData => {
    // loginSchema.validate(loginData);
    const currentUser = this.users[loginData.email];
    if (currentUser && currentUser.password === loginData.password) return currentUser;
    return null;
  };
}
