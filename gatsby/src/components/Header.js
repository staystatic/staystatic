import React from 'react'
import Link  from 'gatsby-link'

export default ({data}) =>
      <div id="header">
        <table style={{width: "100%"}}>
         <tbody>
         <tr>
           <td>
            <Link to={"/"}>{ data.site.siteMetadata.title }</Link>
           </td>
           <td style={{textAlign: "right"}}>
            <Link to={"/about/"}>About</Link>
           </td>
          </tr>
          </tbody>
        </table>
      </div>
