# Gatsby (+GraphQL) Static Website Sample

> Blazing-fast static site generator for React.
> Modern web tech without the headache.
> Bring your own data.
> Static Progressive Web Apps.
>
> -- gatsbyjs.org



Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/gatsby-graphql`](http://staystatic.github.io/sites/gatsby-graphql)

```
│   gatsby-config.js
│   gatsby-node.js
│   package.json
│
└───src/
    ├───components/
    │       Footer.js
    │       Header.js
    │       LinkList.js
    │       PostList.js
    │
    ├───css/
    │       style.css
    │
    ├───data/
    │       links.js
    │
    ├───layouts/
    │       index.js
    │
    ├───pages/
    │   │   about.js
    │   │   index.js
    │   │
    │   └───posts/
    │           new-build-system.md
    │           new-repo-maps.md
    │           new-season.md
    │
    └───templates/
            post.js
```

will result in:

```
│   app-2acd99fcfc70c7ec8a0a.js
│   app-2acd99fcfc70c7ec8a0a.js.map
│   build-js-styles.css
│   build-js-styles.css.map
│   chunk-manifest.json
│   commons-a706efda9882e3aecc8c.js
│   commons-a706efda9882e3aecc8c.js.map
│   component---src-layouts-index-js-c7801619b3d290cd7234.js
│   component---src-layouts-index-js-c7801619b3d290cd7234.js.map
│   component---src-pages-about-js-ec83f8cb31d5d651db6a.js
│   component---src-pages-about-js-ec83f8cb31d5d651db6a.js.map
│   component---src-pages-index-js-7a4ee00b60c522c51efc.js
│   component---src-pages-index-js-7a4ee00b60c522c51efc.js.map
│   component---src-templates-post-js-2c2b6669e1eef7a2bf41.js
│   component---src-templates-post-js-2c2b6669e1eef7a2bf41.js.map
│   index.html
│   path----c622219dd6f45a37b480.js
│   path----c622219dd6f45a37b480.js.map
│   path---about-a0e39f21c11f6a62c5ab.js
│   path---about-a0e39f21c11f6a62c5ab.js.map
│   path---index-a1a20f675945a44dff76.js
│   path---index-a1a20f675945a44dff76.js.map
│   path---posts-new-build-system-28812c3926bd90e09ffd.js
│   path---posts-new-build-system-28812c3926bd90e09ffd.js.map
│   path---posts-new-repo-maps-b4a76498aa30a97236aa.js
│   path---posts-new-repo-maps-b4a76498aa30a97236aa.js.map
│   path---posts-new-season-3ff4114e155504f291d4.js
│   path---posts-new-season-3ff4114e155504f291d4.js.map
│   render-page.js.map
│   stats.json
│   styles.css
│
├───about/
│       index.html
│
└───posts/
    ├───new-build-system/
    │       index.html
    │
    ├───new-repo-maps/
    │       index.html
    │
    └───new-season/
            index.html
```


## Install & Build Notes

To install use:

```
$ npm install
```

To build use:

```
$ cd staystatic/gatsby
$ gatsby build
```

Find the compiled static site in the `public` folder.
