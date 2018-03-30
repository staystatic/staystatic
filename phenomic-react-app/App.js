import * as React from "react";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
// if you don't need the basename, you can rely on the browserHistory
// import { Router, Route, browserHistory } from "react-router";
import { Router, Route, useRouterHistory } from "react-router";
// default (browser) history needs a DOM, so memory history is used for static rendering
import { createHistory, createMemoryHistory } from "history";

import "./styles.css";

import HomeContainer from "./src/index.js";
import PostContainer from "./src/post.js";
import PageContainer from "./src/page.js";

// if you don't need the basename, you can rely on the browserHistory
const history = useRouterHistory(
  typeof window !== "undefined" ? createHistory : createMemoryHistory
)({ basename: process.env.PHENOMIC_APP_BASENAME });

const routes = () => (
  <Router history={history}>
    <Route path="/" component={HomeContainer} />
    <Route path="/posts/*" component={PostContainer} />
    <Route path="*" component={PageContainer} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
