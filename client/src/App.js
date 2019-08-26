import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import LoginHome from './pages/LoginHome';
import Login from './pages/Login';
// import myPlants from "./pages/MyPlants";
import SearchMain from "./pages/SearchMain";
import DiscoveryMain from "./pages/DiscoveryMain";
import DiscoverListItemsPage from "./pages/DiscoverListItemsPage";
import DetailPlant from "./pages/DetailPlant";
import StickyBottom from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={LoginHome} />
          {/* <Route exact path="/myPlants" component={myPlantsMain} /> */}
          <Route exact path="/search" component={SearchMain} />
          <Route exact path="/discovery" component={DiscoveryMain} />
          <Route exact path={"/easy-to-grow"} component={() => <DiscoverListItemsPage category={"easy-to-grow"} />} />
          <Route exact path={"/decorative"} component={() => <DiscoverListItemsPage category={"decorative"} />} />
          <Route exact path={"/rare"} component={() => <DiscoverListItemsPage category={"rare"} />} />
          <Route path={"/:plantName"} component={DetailPlant} />
          <Route path={"/login"} component={Login} />

        </Switch>
        <StickyBottom />
      </div>
    </Router>
  );
}

export default App;
