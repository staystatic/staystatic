# Hugo Static Site Sample

Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/hugo`](http://staystatic.github.io/sites/hugo)

```
|   config.toml
|   README.md
|
+---content
|   |   about.md
|   |
|   \---post
|           new-build-system.md
|           new-repo-maps.md
|           new-season.md
|
+---data
|       links.toml
|
+---layouts
|   |   index.html
|   |
|   +---partials
|   |       footer.html
|   |       head.html
|   |       header.html
|   |
|   +---post
|   |       single.html
|   |
|   \---_default
|           single.html
|
\---static
    \---css
            style.css
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
\---post
    +---new-build-system
    |       index.html
    |
    +---new-repo-maps
    |       index.html
    |
    \---new-season
            index.html
```


### Todos

- [ ] Loading the Hugo static site sample over https causing Chrome to not load the CSS :)
