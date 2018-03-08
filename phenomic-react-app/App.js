import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import {
  createApp,
  renderApp,
} from "@phenomic/preset-react-app/lib/client";

import "./styles.css";

import HomeContainer from "./src/index.js"
import PostContainer from "./src/post.js"
import PageContainer from "./src/page.js"

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} />
    <Route path="/posts/*" component={PostContainer} />
    <Route path="*" component={PageContainer} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
