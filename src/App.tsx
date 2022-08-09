import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Popup } from './components/Popup/Popup';
import s from './styles/App.module.scss'



function App() {
  const [clicked, setIsclicked] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const isopenPopup =(event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    setOpenPopup(true)
  };

  const arr:any = []
  const [time, setTime] = useState<number>(0)
  const [week,setWeek] = useState<number>(0)
  const handleClick =(event: any) => {
    event.preventDefault();
    setOpenPopup(true)
    setTime(event.target.value/10-(event.target.value%10)/10)
    setWeek(event.target.value%10)
    console.log(time, week)
  };
  
    for (let times = 0; times <= 23; times++) {
      for (let week = 1; week <= 7; week++) {
        arr.push(<button key={times*10+week} value = {times*10+week} onClick = {handleClick}></button>);
      }
    }


  const closeAddEvent = () =>{
    setOpenPopup(false)
  }
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
    <>
    {openPopup ? (<Popup clickHandler ={closeAddEvent} year ={date.getFullYear()} week ={week} time = {time}  month = {month[date.getMonth()]}/>):''}
    <div className={s.App}>
      <Header />
      <Main arr = {arr}/>
      <Footer clicked = {clicked}/>
    </div>
    </>
  );
}

export default App;
