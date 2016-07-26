import React from 'react'

export default class LinkList extends React.Component {
  render() {
    const {links} = this.props;
    return (
      <ul>
        {links.map( link => <li><a href={link.url}>{link.title}</a></li> )}
      </ul>
    )
  }
}
