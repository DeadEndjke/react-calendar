import React, { useState } from 'react'
import s from './Panel.module.scss'

interface Props{
  arr:any
}

export const Panel = ({arr}:Props) => {
  

  return (
    <div className={s.panel}>
      <div className={s.grid}>
          {arr}
          
      </div>
    </div>
  )
}
