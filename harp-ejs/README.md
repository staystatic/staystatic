# Harp (+EJS) Static Site Sample

> Harp is a static web server that also serves Jade, Markdown, EJS, Less, Stylus, Sass, and CoffeeScript
> as HTML, CSS, and JavaScript without any configuration. It supports the beloved layout/partial
> paradigm and it has flexible metadata and global objects for traversing the file system and injecting
> custom data into templates. Optionally, Harp can also compile your project down to static assets for
> hosting behind any valid HTTP server.
>
> -- sintaxi/harpjs


Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/harp-ejs`](http://staystatic.github.io/sites/harp-ejs)

```
|   404.ejs
|   about.md
|   index.ejs
|   README.md
|   _data.json
|   _harp.json
|   _layout.ejs
|
+---css/
|       style.css
|
+---data/
|       _data.json
|
+---posts/
|       new-build-system.md
|       new-repo-maps.md
|       new-season.md
|       _data.json
|       _layout.ejs
|
\---_partials/
        footer.ejs
        github.ejs
        head.ejs
        header.ejs
```

will result in:

```
|   404.html
|   about.html
|   index.html
|
+---css/
|       style.css
|
\---posts/
        new-build-system.html
        new-repo-maps.html
        new-season.html
```


## Install & Build Notes

To install use:

```
$ npm install -g harp
```

To build (compile) use:

```
$ cd staystatic/harp-ejs
$ harp compile
```

Find the compiled static site in the `www` folder.

Note: For local testing change the `site.path` in  `_harp.json`
from `"/sites/harp-ejs"` to `""` (yes, an empty string).



## Todos

- [ ] title in index.html/ejs not set to "Welcome" but last post title - why?
