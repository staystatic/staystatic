import React from "react";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import PostList from "./components/PostList";
import LinkList from "./components/LinkList";
import DefaultLayout from "./layouts/DefaultLayout";

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const Home = ({ isLoading, hasError, posts, links }) => (
  <DefaultLayout>
    {isLoading && "Loading..."}
    {hasError && <h1>Error</h1>}
    <div>
      <b>{"News 'n' Updates"}</b>
      {posts && posts.error
        ? posts.error.statusText
        : posts.node && posts.node.list && <PostList posts={posts.node.list} />}
    </div>
    <div>
      <b>{"Links 'n' Bookmarks"}</b>
      {links && links.error
        ? links.error.statusText
        : links.node && (
            <LinkList
              links={
                // phenomic enhance results with a "filename" key,
                // so array are transformed as object with an additional key
                // that we don't want for the list of links
                Object.keys(links.node)
                  .filter(key => isNumeric(key))
                  .map(key => links.node[key])
              }
            />
          )}
    </div>
  </DefaultLayout>
);

const HomeContainer = createContainer(Home, (/*props*/) => ({
  posts: query({
    path: "posts"
    // want to add pagination?
    // limit: 2,
    // after: props.params.after
    // and add a new route in App.js
    // see https://github.com/phenomic/phenomic/blob/master/packages/preset-react-app/docs/getting-started/README.md
  }),
  links: query({
    id: "links"
  })
}));

export default HomeContainer;
