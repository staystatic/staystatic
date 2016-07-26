# Jekyll Static Site Sample

Shows how to use:

1. Pages
2. Posts 
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/jekyll`](http://staystatic.github.io/sites/jekyll)

```
|   about.md
|   index.html
|   README.md
|   _config.yml
|
+---css
|       style.css
|
+---_data
|       links.yml
|
+---_includes
|       footer.html
|       header.html
|
+---_layouts
|       default.html
|       page.html
|       post.html
|
\---_posts
        2014-11-11-new-repo-maps.md
        2014-12-12-new-build-system.md
        2015-08-25-new-season.md
```

will result in:

```
|   about.html
|   index.html
|
+---2014
|   +---11
|   |   \---11
|   |           new-repo-maps.html
|   |
|   \---12
|       \---12
|               new-build-system.html
|
+---2015
|   \---08
|       \---25
|               new-season.html
|
\---css
        style.css
```

