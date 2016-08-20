# Nikola Static Site Sample

> Nikola is a static site and blog generator, written in Python. It can use Mako and Jinja2
> templates, and input in many popular markup formats, such as reStructuredText and Markdown -
> and can even turn Jupyter (IPython) Notebooks into blog posts! It also supports image
> galleries, and is multilingual. Nikola is flexible, and page builds are extremely fast,
> courtesy of doit (which is rebuilding only what has been changed).
>
> -- getnikola.com

Shows how to use:

1. Pages
2. Posts
3. Custom Content Types (e.g. Bookmarks 'n' Links)

See the live version @ [`sites/nikola`](http://staystatic.github.io/sites/nikola)

```
|   conf.py
|
+---data/
|       links.yml
|
+---files/
|   \---css
|           style.css
|
+---posts/
|       new-build-system.md
|       new-repo-maps.md
|       new-season.md
|
+---stories/
|       about.md
|       index.md
|
\---templates/
    |   base.tmpl
    |   main_index.tmpl
    |   post_list_directive.tmpl
    |
    \---includes/
            footer.html
            github.html
            header.html            
```

will result in:

```
|   index.html
|
+---about/
|       index.html
|
+---css/
|       style.css
|
\---posts/
    +---new-build-system/
    |       index.html
    |
    +---new-repo-maps/
    |       index.html
    |
    \---new-season/
            index.html
```


## Thanks

Contributed by [Roberto Alsina](https://github.com/ralsina). Thanks!


## Install & Build Notes

To install use:

```
$ pip install "nikola[extras]"
```

To build  use:

```
$ cd staystatic/nikola
$ nikola build
```

Find the compiled static site in the `output` folder.


## Todos

- [ ] in posts template add links to posts / news (now prev/next)
- [ ] clean up config - simplify - do NOT copy assets that will not get used etc.
  - [ ] do NOT generate blog archive
  - [ ] do NOT include source (why, why not??)
- [ ] configure to use "simple" non-pretty url/path e.g. about.html instead of about/index.html
