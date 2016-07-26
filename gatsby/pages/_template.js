import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

// Import styles.
import 'css/style.css'



export default class MasterTemplate extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }

  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route:    React.PropTypes.object,
  }
}
