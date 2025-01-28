import React, { useEffect, useState } from 'react'
import './Theme.css';

const Theme = () => {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (dark) {
            document.documentElement.style.setProperty('--bgColor', '#3a6760');
            document.documentElement.style.setProperty('--whiteColor', '#12211f');            
        } else {
            document.documentElement.style.setProperty('--bgColor', '#12211f');
            document.documentElement.style.setProperty('--whiteColor', '#b8d7cf');
        }
    },[dark]);

  return (
    <div id="theme">
        {
            dark
            ?<i className='fa-solid fa-sun' onClick={()=> {setDark(false)}}></i>
            :<i className='fa-solid fa-moon' onClick={()=> {setDark(true)}}></i>
        }
    </div>
  )
}

export default Theme
