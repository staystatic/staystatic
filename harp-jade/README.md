# Harp (+Jade) Static Site Sample

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

See the live version @ [`sites/harp`](http://staystatic.github.io/sites/harp)

```
|   404.jade
|   about.md
|   index.jade
|   README.md
|   _data.json
|   _harp.json
|   _layout.jade
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
|       _layout.jade
|
\---_partials/
        footer.jade
        github.jade
        head.jade
        header.jade
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
$ cd staystatic/harp-jade
$ harp compile
```

Find the compiled static site in the `www` folder.

Note: For local testing change the `site.path` in  `_harp.json`
from `"/sites/harp"` to `""` (yes, an empty string).



## Todos

- [x] sort posts (`each post, slug in public.posts._data`) by date in loop (see index.jade) - how? possible?
  - "sort order" is defined by order in `_data.json`, thus, list posts in reverse chronologial order
- [x] add page.title in layout
  - use "nested" page and site hash
- [x] add post layout add title, date etc.
  - use "nested" page hash
- [ ] add google fonts css line
- [ ] use public folder - possible to configure in `_harp.json` ?
- [ ] check - can include partial without path (e.g. from default `_partials` folder) ??
- [ ] possible partial with "plain" html (not jade) ??
- [ ] possible to exclude README ?? (use public (sub)folder ??)
