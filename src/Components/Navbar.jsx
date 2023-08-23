import { TextInput } from '@tremor/react'
import React from 'react'
import { SearchCircleIcon
  } from "@heroicons/react/solid";


function Navbar() {
  return (
    <div id='top' className='relative w-full  sm:flex justify-between items-center p-2'>
        <h1 className='font-bold text-slate-300'>Dashbord</h1>
        <div className='py-2'>
          <TextInput   icon={SearchCircleIcon}  placeholder='search'/>
        </div>
    </div>
  )
}

export default Navbar