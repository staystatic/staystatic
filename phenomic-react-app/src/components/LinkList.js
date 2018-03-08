import React from 'react'

export default ({links}) =>
<ul>
  { links.data.map((link, i) => <li key={i}><a href={link.url}>{link.title}</a></li> )}
</ul>
