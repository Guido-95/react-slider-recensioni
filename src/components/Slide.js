import React from 'react'
import './slide.css'
function Slide({autore,recensione,voto,slideClass}) {
  return (
      
    <div className={`single-slide ${slideClass}`}>
        
        <div className="review">
            
            <h4>{autore}</h4>
            <p>{recensione}</p>
            <div className="star-container">
               voto {voto}
            </div> 
        </div>
    </div>
  )
}

export default Slide