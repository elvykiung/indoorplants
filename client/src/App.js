import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import LoginHome from './pages/LoginHome';
import Login from './pages/LogIn';
import SearchMain from './pages/SearchMain';
import DiscoveryMain from './pages/DiscoveryMain';
import DiscoverListItemsPage from './pages/DiscoverListItemsPage';
import DetailPlant from './pages/DetailPlant';
import StickyBottom from './components/Nav';
import MyPlantsMain from './pages/MyPlantsMain';
import MyPlantsDetail from './pages/MyPlantsDetailPage';
import auth from './auth';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/home" component={LoginHome} /> */}
          <PrivateRoute exact path="/myPlants" component={MyPlantsMain} />
          <Route exact path="/" component={LoginHome} />
          <Route exact path="/myPlants/detail" component={MyPlantsDetail} />
          <Route exact path="/search" component={SearchMain} />
          <Route exact path="/discovery" component={DiscoveryMain} />
          <Route exact path={'/easy-to-grow'} component={() => <DiscoverListItemsPage category={'easy-to-grow'} />} />
          <Route exact path={'/decorative'} component={() => <DiscoverListItemsPage category={'decorative'} />} />
          <Route exact path={'/rare'} component={() => <DiscoverListItemsPage category={'rare'} />} />
          <Route path={'/detail/:plantName'} component={DetailPlant} />
          <Route exact path={'/login'} component={Login} />
        </Switch>
        <StickyBottom />
      </div>
    </Router>
  );
}

export default App;
