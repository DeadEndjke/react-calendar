import React from 'react'
import s from './../BotBlock.module.scss'

export const DateLine = () => {
    const Date = ['25','26','27','28','29','30','31',]
  return (
    <div className={s.dateline}>
        {Date.map((date) =>(
            <button key={date.toString()} className={s.item}>{date}</button>
        ))}
    </div>
  )
}
