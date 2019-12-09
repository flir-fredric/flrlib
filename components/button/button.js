import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.scss'

const Button = (props) => {
  const { invert, children } = props

  const classes = classNames(
    'flr-button',
    {
      'flr-button__inverted': invert
    }
  )

  return (
    <button className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  invert: PropTypes.bool
}

Button.defaultProps = {
  invert: false
}

export default Button
