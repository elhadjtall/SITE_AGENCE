import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-8 text-center text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex gap-x-4'>
          <h1 className='text-2xl font-semibold text-violet-500'>MyImmo</h1>
          <p className='text-2xl '>Copyright &copy; 2023</p>
        </div>
        <div className='flex gap-x-4'>
          <h5>Company</h5>
          <p>About</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
