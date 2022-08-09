import React from 'react'
import { BotBlock } from './BotBlock/BotBlock'
import s from './Header.module.scss'
import { TopBlock } from './TopBlock/TopBlock'

export const Header = () => {
  return (
    <header className={s.header}>
        <TopBlock />
        <BotBlock />
    </header>
  )
}
