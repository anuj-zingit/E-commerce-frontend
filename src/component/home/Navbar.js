import React from 'react'
import { navData } from '../../constants/data';
function Navbar() {
  console.log(navData)
  return (
    <div className='navBar'>
      {
        navData.map((data)=>
          (<div > 
         
          <img src={data.url} alt={data.url}/>
          <p className='navBarText'>{data.text}</p>
          
          </div>)        
        )
      }
    </div>
  )
}

export default Navbar;
