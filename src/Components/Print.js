import React from 'react'
import '../Styles/Print.css'

function Print() {
  return (
    <div className='print-advice'>
        <div className='print-advice-part'>
            <div className='print-advice-inner'>
                <div className='print'>
                    <p className='advice'>
                        Good to give You a advice Thank You I will show again
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
            </div>
        </div>
    </div>
  )
}

export default Print