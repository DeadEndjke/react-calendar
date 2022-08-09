import React from 'react'
import s from './BotBlock.module.scss'
import { DateLine } from './Lines/DateLine'
import { MonthLine } from './Lines/MonthLine'
import { WeekLine } from './Lines/WeekLine'

export const BotBlock = () => {
  return (
    <div className={s.botblock}>
        <WeekLine />
        <DateLine />
        <MonthLine />
    </div>
  )
}
