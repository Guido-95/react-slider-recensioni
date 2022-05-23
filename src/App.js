import {useState,useEffect} from 'react';
import './App.css';
import Slide from './components/Slide'
import data from './data'
function App() {
  const [selected,setSelected] = useState(0);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setSelected((prevValue) => {
        if (prevValue + 1 > data.length - 1) {
          return 0;
        } else {
          return prevValue + 1;
        }
      })
    }, 4000);
    return function(){
      clearTimeout(timer);
    }
  },[selected])
  const indietro= ()=>{
    setSelected((oldValue)=>{
      if(oldValue - 1 < 0){
        return data.length - 1;
      }else{
        return oldValue - 1;
      }
    })
    
  }
  const avanti= ()=>{
    setSelected((prevValue) => {
      if (prevValue + 1 > data.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  }

  return (
    <div className='slider-container'>

    
      <div className="slider">
        {data.map((el,index)=>{
          let positionClass = "";
          if(selected === index ){
            positionClass= 'active'
          }else if(selected === index + 1 || index === data.length - 1 ){
            positionClass= 'prev'
          }else{
            positionClass= 'next'
          }
          return <Slide key={el.id} {...el} slideClass={positionClass} />

        })}
        <div onClick={indietro} className='indietro'>indietro</div>
        <div onClick={avanti} className='avanti'>avanti</div>
      </div>
    </div>
  );
}

export default App;
