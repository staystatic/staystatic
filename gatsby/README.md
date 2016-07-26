# Gatsby Static Site Sample

Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/gatsby`](http://staystatic.github.io/sites/gatsby)

```
|   config.toml
|   html.js
|   package.json
|
+---components
|       Footer.js
|       Header.js
|       LinkList.js
|       PostList.js
|
+---css
|       style.css
|
+---data
|       links.js
|
+---pages
|   |   404.md
|   |   index.js
|   |   _template.js
|   |
|   +---pages
|   |       about.md
|   |
|   \---posts
|           2014-11-11-new-repo-maps.md
|           2014-12-12-new-build-system.md
|           2015-08-25-new-season.md
|           _template.js
|
\---wrappers
        md.js
```

will result in:

```
|   404.html
|   bundle.js
|   bundle.js.map
|   index.html
|   styles.css
|
+---about
|       index.html
|
\---posts
    +---new-build-system
    |       index.html
    |
    +---new-repo-maps
    |       index.html
    |
    \---new-season
            index.html
```



### ToDos

- [ ] Add missing date to posts
- [ ] Add missing google fonts link in header (in html.js)
- [ ] Try to use "static" css e.g. style.css (do NOT inline) - why? why not?
