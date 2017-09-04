import React from 'react'

export default ({links}) =>
<ul>
  { links.map( link => <li><a href={link.url}>{link.title}</a></li> )}
</ul>
