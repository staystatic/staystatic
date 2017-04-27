from __future__ import unicode_literals
import yaml
BLOG_AUTHOR = "Stay Static"  # (translatable)
BLOG_TITLE = "Nikola Stay Static Sample"  # (translatable)
SITE_URL = "http://staystatic.github.io/sites/nikola/"
BLOG_EMAIL = "n.tesla@example.com"
BLOG_DESCRIPTION = "Nikola demo for Stay Static"  # (translatable)
COMMENT_SYSTEM = None
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
COPY_SOURCES = False
SHOW_SOURCELINK = False
PRETTY_URLS = False
DISABLED_PLUGINS = ["robots"]
GLOBAL_CONTEXT = {}
WRITE_TAG_CLOUD = False
GENERATE_RSS = False
DISABLED_PLUGINS = ['classify_page_index', 'classify_sections', 'classify_indexes', 'classify_archive', 'tags', 'sitemap', 'robots', 'create_bundles']
