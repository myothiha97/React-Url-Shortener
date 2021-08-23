import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/homepage/homepage.component";
import FeaturePage from "../pages/featurepage/features.component";
import PricingPage from "../pages/pricing/pricing.component";
import ResourcesPage from "../pages/Resources/resources.component";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/features" component={FeaturePage}></Route>
        <Route path="/pricing" component={PricingPage}></Route>
        <Route path="/resources" component={ResourcesPage}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
