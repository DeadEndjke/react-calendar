import React from 'react'
import s from './Popup.module.scss'

interface Props{
    clickHandler: () => void;
    month:string;
    year:number ;
    week:number ;
    time:number ;
}

export const Popup = ({clickHandler,month, year,week,time}: Props) => {
  return (
    <div className={s.popup}>
        <div className={s.form}>
            <div className={s.enter}>
                <div className={s.text}>Enter event</div>
                <div className={s.text}>04-{month}-{year}</div>
                <div className={s.text}> {time}:00 - {time+1}:00</div>
                <input type="event"></input>
            </div>
            <div className={s.buttons}>
                <button onClick={clickHandler}>Cancel</button><button>OK</button>
            </div>
        </div>
    </div>
  )
}
