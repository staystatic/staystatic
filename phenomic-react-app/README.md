# [Phenomic](https://phenomic.io) (React App) Stay Static Sample Website

> Phenomic is a website compiler. It allows you to use your favorite front-end
> technologies to get a fast website. It compiles your website to make it as
> fast as possible.
>
> -- phenomic.io

Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @
[`sites/jekyll`](http://staystatic.github.io/sites/jekyll)

```
├── App.js
├── Html.js
├── package.json
├── README.md
├── styles.css
├── content
│   ├── about.md
│   ├── links.json
│   └── posts
│       ├── new-build-system.md
│       ├── new-repo-maps.md
│       └── new-season.md
└── src
    ├── components
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── LinkList.js
    │   └── PostList.js
    ├── index.js
    ├── layouts
    │   └── DefaultLayout.js
    ├── page.js
    └── post.js
```

will result in:

```
├── about
│   └── index.html
├── index.html
├── links
│   └── index.html
├── posts
│   ├── new-build-system
│   │   └── index.html
│   ├── new-repo-maps
│   │   └── index.html
│   └── new-season
│       └── index.html
└── phenomic
  ├── item
  │   ├── about.json
  │   └── links.json
  ├── phenomic.main.03e91b1c.css
  ├── phenomic.main.6bc49e78.js
  └── posts
      ├── by-default
      │   └── 1
      │       ├── desc
      │       │   └── limit-3.json
      │       └── desc.json
      └── item
          ├── new-build-system.json
          ├── new-repo-maps.json
          └── new-season.json
```

## Install

```console
cd staystatic/phenomic-react-app
npm install
```

(or `yarn`)

## Build

```console
cd staystatic/phenomic-react-app
npm run build
```

(or `yarn build`)

Find the compiled static site in the `dist` folder.
