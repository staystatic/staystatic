# Middleman Static Site Sample

Shows how to use:

1. Pages
2. Posts 
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/middleman`](http://staystatic.github.io/sites/middleman)

```
|   config.rb
|
+---data
|       links.yml
|
\---source
    |   about.html.md
    |   index.html.erb
    |
    +---layouts
    |       layout.erb
    |       post.erb
    |
    +---partials
    |       _footer.erb
    |       _head.erb
    |       _header.erb
    |
    +---posts
    |       2014-11-11-new-repo-maps.html.md
    |       2014-12-12-new-build-system.html.md
    |       2015-08-25-new-season.html.md
    |
    \---stylesheets
            style.css
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
