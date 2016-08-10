
include Nanoc::Helpers::Blogging
include Nanoc::Helpers::LinkTo
include Nanoc::Helpers::Rendering  # adds render (for partials)
include Nanoc::Helpers::Tagging


## hack: ?? is there a built-in way for datafiles?
##   for now load yaml here

def data_links
  puts "pwd:"
  puts Dir.pwd

  data = YAML.load_file( './data/links.yml' )
  puts data.inspect
  data
end
