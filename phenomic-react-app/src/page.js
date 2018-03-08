import React from "react"
import Head from "react-helmet";
import {
  createContainer,
  query,
  BodyRenderer,
} from "@phenomic/preset-react-app/lib/client";

import DefaultLayout from './layouts/DefaultLayout'

const Page = ({ isLoading, hasError, page }) => {
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
        </DefaultLayout>
}

const PageContainer = createContainer(Page, props => ({
  page: query({ id: props.params.splat }),
}));

export default PageContainer
