###
# Page options, layouts, aliases and proxies
###

activate :blog do |blog|
  blog.permalink = '/news/{title}.html'
  blog.sources = 'posts/{year}-{month}-{day}-{title}.html'
end


## page 'posts/*', :layout => :post
##   -- use layout: post in front matter for now

## set :site_title, 'Middleman Stay Static Sample Site' 
##   -- not working; try/use helper method instead for now


helpers do
  def site_title
    'Middleman Stay Static Sample Site'
  end

  def page_title
    current_page.data.title ? current_page.data.title : nil
  end
end


configure :build do
  set :http_prefix, '/sites/middleman'
end
