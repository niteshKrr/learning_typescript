import React from 'react'
import {NameProps} from './Names'

const Name = (props:NameProps) => {
  return (
      <div>{props.name.first} {props.name.last}</div>
  )
}

export default Name