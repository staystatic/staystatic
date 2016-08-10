# Nanoc Static Site Sample

> Nanoc is a static-site generator, fit for building anything from a small personal blog
> to a large corporate web site.
>
> -- nanoc.ws


Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/nanoc`](http://staystatic.github.io/sites/nanoc)

```
|   .gitignore
|   nanoc.yaml
|   README.md
|   Rules
|
+---content/
|   |   about.md
|   |   index.html
|   |
|   +---css/
|   |       style.css
|   |
|   \---posts/
|           2014-11-11-new-repo-maps.md
|           2014-12-12-new-build-system.md
|           2015-08-25-new-season.md
|
+---data/
|       links.yml
|
+---layouts/
|       default.html
|       index.html
|       page.html
|       post.html
|       _footer.html
|       _github.html
|       _header.html
|
\---lib
        helpers.rb
```

will result in:

```
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
$ gem install nanoc
```

To build  use:

```
$ cd staystatic/nanoc
$ nanoc
```

Find the compiled static site in the `output` folder.


## Notes

Use `filter :relativize_paths, :type => :html`  to make all absolute paths
relative - e.g. alternative for adding a path prefix (e.g. `/sites/nanoc`)


## Todos

- [ ] "official" support for datafiles?
- [ ] `sorted_articles` helper only working (populated) in layouts (not in .html page) - why?
