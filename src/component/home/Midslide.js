import React from 'react'
import Slider from './Slider'
function Midslide({ products, title, timer }) {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <div className='row'>
      <div className='col-9'>
      <Slider
        products={products}
        title={title}
        timer={timer}
      />
      </div>
      <div className='col-3 addUrl'>
          <img  src={adURL} alt='adURL'/>
      </div>    
    </div>
  )
}

export default Midslide
