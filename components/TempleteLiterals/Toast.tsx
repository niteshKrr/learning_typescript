import React from 'react'

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = "top" | "center" | "bottom";

type ToastProp = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'>
};

export const Toast = ({position}: ToastProp) => {
  return (
      <div>Toast position is {position}</div>
  )
}
