import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Homepage, SignInPage, SignUpPage } from "./pages";
import { MainLayout, AuthLayout } from "./layouts";

const NotFound = () => {
  return <div> Not found</div>;
};

const Explore = () => {
  return <div>Explorer</div>;
};

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Homepage}
        exact
        path="/"
        layout={MainLayout}
      />
      <RouteWithLayout
        component={Explore}
        exact
        path="/explore"
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/signin"
        layout={AuthLayout}
        component={SignInPage}
      />
      <RouteWithLayout
        exact
        path="/signup"
        layout={AuthLayout}
        component={SignUpPage}
      />
      <RouteWithLayout
        exact
        path="/not-found"
        layout={MainLayout}
        component={ NotFound}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
