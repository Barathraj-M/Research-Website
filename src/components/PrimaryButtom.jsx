import React from 'react'

import '../index.css'

const PrimaryButtom = ({ link, text }) => {
  return (
    <a
      className='text-decoration-none rounded-full bg-primary-1 border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-colors duration-300 ease-in-out text-nowrap font-semibold'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  )
}

export default PrimaryButtom