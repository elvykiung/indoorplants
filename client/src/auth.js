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
        email: "cactus@123.com",
        password: "$2b$10$Dn2L0zIEs4sDj5S/JUDSf.e7yamYygrLRbDa6LgAavB6LGnrPAliS"
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
