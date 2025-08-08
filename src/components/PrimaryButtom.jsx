import React from 'react'

import '../index.css'

const PrimaryButtom = ({ link, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(link);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className='text-decoration-none rounded-full bg-primary-1 border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-colors duration-300 ease-in-out text-nowrap font-medium cursor-pointer'
      aria-label={`Scroll to ${link}`}
    >
      {text}
    </button>
  )
}

export default PrimaryButtom