# Metalsmith (+Nunjucks) Static Site Sample

Shows how to use:

1. Pages
2. Posts 
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/metalsmith-nunjucks`](http://staystatic.github.io/sites/metalsmith-nunjucks)

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
+---css
|       style.css
|
\---posts
        new-build-system.html
        new-repo-maps.html
        new-season.html
```

