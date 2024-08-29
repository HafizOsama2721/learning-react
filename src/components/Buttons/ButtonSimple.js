import React from 'react'

const ButtonSimple = ({bgColor, icon, text}) => {

// const {bgColor, icon, text} = props
  return (
    <button className={`btn btn-${bgColor ? bgColor : 'dark'} me-2`}><i className={`${icon} me-2`}></i>{text ? text : 'Write Text'}</button>
  )
}

export default ButtonSimple;