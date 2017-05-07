# Jigsaw Static Site Sample

> Static sites for Laravel developers.
> Jigsaw is a framework for rapidly building static sites
> using the same modern tooling that powers your web applications.
>
> -- jigsaw.tighten.co



Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/jigsaw`](http://staystatic.github.io/sites/jigsaw)

```
|   config.php
|
\---source
    |   about.md
    |   index.blade.php
    |
    +---css
    |       style.css
    |
    +---_includes
    |       footer.blade.php
    |       github.blade.php
    |       header.blade.php
    |
    +---_layouts
    |       master.blade.php
    |       page.blade.php
    |       post.blade.php
    |
    \---_posts
            new-build-system.md
            new-repo-maps.md
            new-season.md
```

will result in:

```
|   index.html
|
+---about
|       index.html
|
+---css
|       style.css
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


## Install & Build Notes

To install use:

```
$ composer global require tightenco/jigsaw
```

To build  use:

```
$ cd staystatic/jigsaw
$ jigsaw build
```

Find the compiled static site in the `build_local` folder.



## Todos

- [ ] "official" support for datafiles?
  - for now links added to config.php
- [ ] "better" way to format dates (see dateFormatted helper in posts collection)??
