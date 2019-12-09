import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './button.scss'

const Button = (props) => {
  const { invert, children, ...rest } = props

  const classes = classNames(
    'flr-button',
    {
      'flr-button__inverted': invert
    }
  )

  return (
    <button className={classes} {...rest}>
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
