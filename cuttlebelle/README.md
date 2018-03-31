# [Cuttlebelle](https://cuttlebelle.com/) Stay Static Sample Website

> The react static site generator with editing in mind
>
> -- cuttlebelle.com

See the live version @
[`sites/cuttlebelle`](http://staystatic.github.io/sites/cuttlebelle)

```
.
├── _data
│   └── links.yml
├── assets
│   └── css
│       └── style.css
│
├── code
│   ├── header.js
│   ├── listLinks.js
│   ├── listPosts.js
│   ├── page.js
│   ├── partial.js
│   └── post.js
│
├── content
│   ├── _shared
│   │   ├── footer.md
│   │   ├── header.md
│   │   └── posts.md
│   ├── about
│   │   ├── body.md
│   │   └── index.yml
│   ├── index
│   │   ├── index.yml
│   │   ├── links.md
│   │   └── posts.md
│   └── posts
│       ├── new-build-system
│       │   ├── body.md
│       │   └── index.yml
│       ├── new-repo-maps
│       │   ├── body.md
│       │   └── index.yml
│       └── new-season
│           ├── body.md
│           └── index.yml
└── README.md
```

will result in:

```
.
├── about
│   └── index.html
├── assets
│   └── css
│       └── style.css
├── index.html
└── posts
    ├── new-build-system
    │   └── index.html
    ├── new-repo-maps
    │   └── index.html
    └── new-season
        └── index.html
```

## Install

```console
cd staystatic/cuttlebelle
npm install
```

(or `yarn`)

## Build

```console
cd staystatic/cuttlebelle
npm start
```

(or `yarn start`)

Find the compiled static site in the `site/` folder.

## Develop

```console
cd staystatic/cuttlebelle
npm run build
```

(or `yarn build`)

This will open a server, open the url in your default browser and watch for changes.

## Self-documentation

```console
cd staystatic/cuttlebelle
npm run docs
```

(or `yarn docs`)

This will build the automatic documentation of each for your layouts and put it into the `docs/` folder.
