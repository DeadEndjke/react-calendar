import React, { useState } from 'react'
import s from './Main.module.scss'
import { Panel } from './Panel/Panel';
import { TimeLine } from './TimeLine/TimeLine';

interface Props{
    arr:any;
}

export const Main = ({arr}: Props) => {
  

  return (
   
   
    <main className={s.main}>
       
       <TimeLine />
       <Panel arr = {arr}/>
    </main>
   
  )
}
