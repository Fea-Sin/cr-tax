import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OuiDom from './utils/ouiDomUtils'

class Comp extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  render () {

    
    return (
      <div className="hello">COMP IS DONE</div>
    )
  }
}

Comp.propTypes = {

}
Comp.defaultProps = {

}
export default Comp