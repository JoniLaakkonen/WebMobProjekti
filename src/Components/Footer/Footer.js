import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
     <footer>
        <ul className='some_footer'>
            <li key={1} className='icon'></li>
            <li key={2} className='icon'></li>
            <li key={3} className='icon'></li>
        </ul>
        <small id='copyR'>&copy; Copyright 2023<br/> Joni Laakkonen</small>
     </footer>
    </>
  )
}

export default Footer