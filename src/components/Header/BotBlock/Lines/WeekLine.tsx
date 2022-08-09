import React from 'react'
import s from './../BotBlock.module.scss'

export const WeekLine = () => {
    const Week = [
        {
            id: 1,
            weekday: 'M'
        },
        {
            id: 2,
            weekday: 'T'
        },
        {
            id: 3,
            weekday: 'W'
        },
        {
            id: 4,
            weekday: 'S'
        },
        {
            id: 5,
            weekday: 'F'
        },
        {
            id: 6,
            weekday: 'S'
        },
        {
            id: 7,
            weekday: 'S'
        },
    ]
  return (
    <div className={s.weekline}>
        {Week.map((week) =>(
            <div key={week.id} className={s.item}>{week.weekday}</div>
        ))}
    </div>
  )
}
