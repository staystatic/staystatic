import React from "react"
import Head from "react-helmet";
import {
  createContainer,
  query,
  BodyRenderer,
} from "@phenomic/preset-react-app/lib/client";

import DefaultLayout from './layouts/DefaultLayout'
import PostList from './components/PostList'

const Page = ({ isLoading, hasError, page, posts }) => {
  return <DefaultLayout>
          {isLoading && "Loading..."}
          {hasError && <h1>Error</h1> }
          { page && page.error
        ? page.error.statusText
          : page.node &&
           <div>
             <Head>
                <title>{page.node.title}</title>
              </Head>
             <h1>{page.node.title}</h1>
             <p>{page.node.date}</p>
             <BodyRenderer>{page.node.body}</BodyRenderer>
           </div>
         }
         {posts &&
         posts.node &&
         posts.node.list &&
           <div>
             <b>{"News 'n' Updates"}</b>
             <PostList posts={posts.node.list}/>
           </div>
         }
        </DefaultLayout>
}

const PageContainer = createContainer(Page, props => ({
  page: query({ path: "posts", id: props.params.splat }),
  posts: query({
    path: "posts",
    limit: 3,
  }),
}));

export default PageContainer
