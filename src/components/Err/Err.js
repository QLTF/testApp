import React, { Component } from 'react'
import PropTypes from 'prop-type'

import './404.css'
import imgPath from './404.png'

class DefaultError extends Component {
  constructor() {

  }
  render(){
    return (
      <div>
        <img src={imgPath} alt=""/>
        <h3>{ this.props.info }</h3>
      </div>
    )
  }
}

export default DefaultError
