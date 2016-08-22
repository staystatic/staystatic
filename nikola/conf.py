from __future__ import unicode_literals
import time
import yaml
BLOG_AUTHOR = "Stay Static"  # (translatable)
BLOG_TITLE = "Nikola Stay Static Sample"  # (translatable)
SITE_URL = "http://staystatic.github.io/sites/nikola/"
BLOG_EMAIL = "n.tesla@example.com"
BLOG_DESCRIPTION = "Nikola demo for Stay Static"  # (translatable)
DEFAULT_LANG = "en"
TRANSLATIONS = {
    DEFAULT_LANG: "",
}
NAVIGATION_LINKS = {}
THEME = "base"
THEME_COLOR = '#5670d4'
POSTS = (
    ("posts/*.md", "posts", "post.tmpl"),
    ("posts/*.txt", "posts", "post.tmpl"),
)
PAGES = (
    ("stories/*.md", "", "story.tmpl"),
)
TIMEZONE = "UTC"
COMPILERS = {
    "rest": ('.rst', '.txt'),
    "markdown": ('.md', '.mdown', '.markdown'),
}
INDEX_PATH = "posts"
PRETTY_URLS = False
DISABLED_PLUGINS = ["robots"]
GLOBAL_CONTEXT = {}
GLOBAL_CONTEXT['links'] = yaml.load(open('data/links.yml'))
