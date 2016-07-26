# webgen Static Site Sample

Shows how to use:

1. Pages
2. Posts 
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/webgen`](http://staystatic.github.io/sites/webgen)

```
|   webgen.config
|
+---ext
|       init.rb
|
\---src
    |   about.page
    |   default.template
    |   index.page
    |   metainfo
    |   style.css
    |
    +---posts
    |       new-build-system.page
    |       new-repo-maps.page
    |       new-season.page
    |
    \---templates
            footer.template
            header.template
            page.template
            post.template
            post_list.template
```

will result in:

```
|   about.html
|   index.html
|   style.css
|
\---posts
        new-build-system.html
        new-repo-maps.html
        new-season.html
```


## Thanks

Contributed by [Thomas Leitner](https://github.com/gettalong). Thanks!
