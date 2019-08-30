import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import LoginHome from './pages/LoginHome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchMain from './pages/SearchMain';
import DiscoveryMain from './pages/DiscoveryMain';
import DiscoverListItemsPage from './pages/DiscoverListItemsPage';
import DetailPlant from './pages/DetailPlant';
import StickyBottom from './components/Nav';
import MyPlantsMain from './pages/MyPlantsMain';
import MyPlantsDetail from './pages/MyPlantsDetailPage';
import { ProtectedRoute } from './protected.route';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/home" component={LoginHome} /> */}
          <ProtectedRoute exact path="/myPlants" component={MyPlantsMain} />
          <Route exact path="/" component={LoginHome} />
          <Route exact path="/myPlants/detail" component={MyPlantsDetail} />
          <Route exact path="/search" component={SearchMain} />
          <Route exact path="/discovery" component={DiscoveryMain} />
          <Route exact path={'/easy-to-grow'} component={() => <DiscoverListItemsPage category={'easy-to-grow'} />} />
          <Route exact path={'/decorative'} component={() => <DiscoverListItemsPage category={'decorative'} />} />
          <Route exact path={'/rare'} component={() => <DiscoverListItemsPage category={'rare'} />} />
          <Route path={'/detail/:plantName'} component={DetailPlant} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/signup'} component={Signup} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
        <StickyBottom />
      </div>
    </Router>
  );
}

export default App;