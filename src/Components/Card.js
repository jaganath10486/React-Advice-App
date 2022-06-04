import React, { useState } from 'react'

import '../Styles/Card.css'

function Card() {
    const [flag, setFlag] = useState(false);

  return (
    <div className='advice-box'>
        <div className='advice-inner-box'>
            <div className='inner-box-text d-flex flex-column'>
                <div className='text'>
                    Want A Piece Of Advice?
                </div>
                <div className='image'>
                <i class="fa fa-hand-o-down" aria-hidden="true"></i>
                </div>
                <div className='button'>
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card