import React from 'react'
import Salesitem from './Salesitem'
import Webanyt from './Webanyt'
import Scorelist from './Scorelist'

function Rightcoloum() {
  return (
    <div className='w-full p-2'>
        <Salesitem/>
        <Webanyt/>
        <Scorelist/>
    </div>
  )
}

export default Rightcoloum