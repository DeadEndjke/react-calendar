import React from 'react'
import s from './../BotBlock.module.scss'

export const MonthLine = () => {
    const date = new Date();
    const month = ['January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ]
  return (
    <div className={s.monthline}>
        <div className={s.currentmonthadndyear}>
            {month[date.getMonth()]} {date.getFullYear()}
        </div>
    </div>
  )
}
