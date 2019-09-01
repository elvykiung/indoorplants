import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import LoginHome from './pages/LoginHome';
import SearchMain from './pages/SearchMain';
import DiscoveryMain from './pages/DiscoveryMain';
import DiscoverListItemsPage from './pages/DiscoverListItemsPage';
import DetailPlant from './pages/DetailPlant';
import StickyBottom from './components/Nav';
import MyPlantsMain from './pages/MyPlantsMain';
import MyPlantsDetail from './pages/MyPlantsDetailPage';
import { ProtectedRoute } from './protected.route';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';



class App extends Component {
 
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render(){
    return (

      <Router>
        <div className="App">
        {/* Routes to different components */}
          <Switch>
            {/* <Route exact path="/home" component={LoginHome} /> */}
            <ProtectedRoute exact path="/myPlants" component={MyPlantsMain} />
            <Route exact path="/" component={LoginHome} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path={'/login'} component={LogIn} />
            <Route exact path="/myPlants/detail" component={MyPlantsDetail} />
            <Route exact path="/search" component={SearchMain} />
            <Route exact path="/discovery" component={DiscoveryMain} />
            <Route exact path={'/easy-to-grow'} component={() => <DiscoverListItemsPage category={'easy-to-grow'} />} />
            <Route exact path={'/decorative'} component={() => <DiscoverListItemsPage category={'decorative'} />} />
            <Route exact path={'/rare'} component={() => <DiscoverListItemsPage category={'rare'} />} />
            <Route path={'/detail/:plantName'} component={DetailPlant} />
            <Route path="*" component={() => '404 NOT FOUND'} />
          </Switch>
          <StickyBottom updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {/* greet user if logged in: */}
            {this.state.loggedIn &&
              <p>Join the party, {this.state.username}!</p>
            }

        </div>
      </Router>
    

    );
  }
}


export default App;
