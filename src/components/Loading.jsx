import React from 'react'

import LoadingHolder from '../assets/Images/nav-hover-icon.svg';

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <img
          src={LoadingHolder}
          alt='loading'
          className='w-20 h-20 animate-ping'
          loading='lazy'
        />
    </div>
  )
}

export default Loading