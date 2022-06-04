import React, { useState } from 'react'
import axios from 'axios'

import '../Styles/Card.css'
import '../Styles/Print.css'


function Card() {
    const [flag, setFlag] = useState(false)
    const [message, setMessage] = useState('Want A Piece Of Advice?')
    const [error, SetError] = useState('')
    const [advice, setAdvice]=  useState('')
    const [btnMessage, setbtnMessage] = useState('Show Advice')

   const ShowAdvice = () => {
       setMessage('Loading Advice')
       axios.get('https://api.adviceslip.com/advice')
       .then((response) => {
           //console.log(response.data.slip.advice)
           setAdvice(response.data.slip.advice)
           setMessage('Want A Piece Of Advice?')
       })
       .catch((error) => {
           SetError('OOOPS! Something went Wrong')

       })
   }

   const toggleAdvice = () =>
   {
       if(btnMessage === 'Show Advice')
       {
           setFlag(true)
           setbtnMessage('Hide Advice')
           ShowAdvice()
       }
       else if(btnMessage === 'Hide Advice')
       {
           setFlag(false)
           setbtnMessage('Show Advice')
       }
   }

  return (
  <div>
       <div className='advice-box'>
         <div className='advice-inner-box'>
            <div className='inner-box-text d-flex flex-column'>
                <div className='text'>
                    {message}
                </div>
                <div className='image'>
                <i className="fa fa-hand-o-down"></i>
                </div>
                <div className='button'>
                    <button type="button" className="btn btn-primary btn-lg" onClick={toggleAdvice}>{btnMessage}</button>
                </div>
            </div>
         </div>
       </div>

           <div className='print-advice'>
           <div className='print-advice-part'>
               {
                   flag ? ( <div className={`print-advice-inner`}>
                   <div className='print'>
                       <p className='advice'>
                           {
                               error ? error : advice
                           }
                       </p>
                       <div className='datetime'>
                           <p className='date' style={{display : 'inline-block'}}>
                               {new Date().toDateString()}
                           </p>
                           <p className='time' style={{display : 'inline-block', paddingLeft : '40%'}}>
                               {new Date().toLocaleTimeString()}
                           </p>
                       </div>
                   </div>
               </div>) : (<div></div>)
               }
              
           </div>
       </div>
       
  </div>
   
  )
}

export default Card