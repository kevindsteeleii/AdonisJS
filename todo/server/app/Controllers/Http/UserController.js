'use strict';

const User = use('App/Models/User');

class UserController {
  async register({ request }) {
    const { email, password } = request.all();
    const newUser = await User.create({ email, password, username: email });
    return newUser;
  }

  async login({ request, auth }) {
    const { email, password } = request.all();
    
    const loginUser = await User.query
  }
}

module.exports = UserController
