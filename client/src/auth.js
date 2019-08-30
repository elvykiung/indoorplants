import API from "./utils/API";
import axios from "axios";

class Auth {
  constructor() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  login(cb) {
    //using the axios call login method in util api call the back end serer ("/userApi/login"), taking userLogin info then console the data.data, then return back to util login
    API.login({
      user: {
        email: "123@gm.com",
        password: "12345"
      }
    })
      .then(data => {
        console.log(data.data);
        this.token = data.data.token;
        axios.defaults.headers.common["Authorization"] = `Token ${this.token}`; // for all requests

        cb();
      })
      .catch(err => console.log(err));
  }

  logout(cb) {
    this.token = null;
    cb();
  }

  isAuthenticated() {
    return this.token;
  }
}

export default new Auth();
