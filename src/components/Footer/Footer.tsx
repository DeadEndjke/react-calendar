import React from 'react'
import s from './Footer.module.scss'

interface Props{
    clicked: boolean;
}

export const Footer = ({clicked}:Props) => {
  return (
    <footer className={s.footer}>
      <button>Today</button> 
      {clicked ? (<button>Delete</button> ):('')}
    </footer>
  )
}
