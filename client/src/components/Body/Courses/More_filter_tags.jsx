import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../App'
import { Theme } from '../../Theme'

const More_filter_tags = ({name}) => {

    const {themeToggler} = useContext(AppContext);

    const [toggle, setToggle] = useState(false);

  return (
    <div className='filter_element' onClick={()=>setToggle(!toggle)} style={{
        backgroundColor:  toggle ? "#a5d6a7" : themeToggler ? Theme.Dark.boxColor : Theme.Light.boxColor
    }}>
      
      <span>{name}</span>
    </div>
  )
}

export default More_filter_tags