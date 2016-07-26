# Metalsmith (+Handlebars) Static Site Sample

Shows how to use:

1. Pages
2. Posts 
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/metalsmith`](http://staystatic.github.io/sites/metalsmith)

```
|   build.js
|   package.json
|
+---layouts
|   |   default.html
|   |   page.html
|   |   post.html
|   |
|   \---partials
|           footer.html
|           head.html
|           header.html
|
\---src
    |   about.md
    |   index.html
    |   site.json
    |
    +---css
    |       style.css
    |
    +---data
    |       links.json
    |
    \---posts
            new-build-system.md
            new-repo-maps.md
            new-season.md
```

will result in:

```
|   about.html
|   index.html
|
+---news
|       new-build-system.html
|       new-repo-maps.html
|       new-season.html
|
\---stylesheets
        style.css
```
