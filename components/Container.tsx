import React from 'react'

type ContainerProp = {
    style :  React.CSSProperties
}

const Container = (props : ContainerProp) => {
  return (
    <div style={props.style} >Container is full</div>
  )
}

export default Container