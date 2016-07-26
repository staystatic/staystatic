import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'


export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <table style={{width: "100%"}}>
         <tbody>
         <tr>
           <td>
            <Link to={prefixLink('/')}>{ config.siteTitle }</Link>
           </td>
           <td style={{textAlign: "right"}}>
            <Link to={prefixLink('/about/')}>About</Link>
           </td>
          </tr>
          </tbody>
        </table>
      </div>
      )
  }
}
