import React from "react";
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  StaticRouter,
  Redirect
} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

type Props = {
  context: any;
  location: any;
};

export default class RootComponent extends React.Component<Props, void> {
  render() {
    const app = (
      <div>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/en/artists/" exact={true} component={AboutPage} />
          {/* <Route exact path="/" render={() => <Redirect to="/home/" />} />
          <Route path="/home/" component={HomePage} />
          <Route path="/about-us/" component={AboutPage} /> */}
          {/* <Route
            path="*"
            component={({ staticContext }: any) => {
              if (staticContext) staticContext.status = 404;

              return <h1>Not Found :(</h1>;
            }}
          /> */}
        </Switch>
      </div>
    );

    if (typeof window === "undefined") {
      return (
        <StaticRouter
          context={this.props.context}
          location={this.props.location}
        >
          {app}
        </StaticRouter>
      );
    }
    return <BrowserRouter>{app}</BrowserRouter>;
  }
}