import React, { Component } from 'react'
import PropTypes from 'prop-type'

import DefaultError from '../../components/Err'

const Error = () => {
    return (
      <div>
        <DefaultError info="出错啦~~" />
      </div>
    )
}

ReactDOM.render(<Error />,
  document.querySelector("#app"));
