import React from 'react'
import PrimaryButtom from '../components/PrimaryButtom'

const NotFound = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-y-5 border-1 border-primary-1 rounded-xl max-w-120 p-10'>
            <h1 className='text-5xl font-bold'>404</h1>
            <h2 className='font-semibold text-3xl!'>Page Not Found</h2>
            <p className='text-center text-gray-2 -mt-5'>The page you are looking for doesn't exist or has been moved</p>
            <PrimaryButtom link={'/'} text={'Back to home'}/>
        </div>
    </div>
  )
}

export default NotFound