import React from 'react'

const Login = () => {
  return (
    <section>
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen gap-x-10 bg-violet-600'>
            <div className='flex-1'>
                <div className='text-white px-12 py-10'>
                    <h1 className='text-6xl font-semibold mb-3'>Se connecter</h1>
                    <p className='mb-6 text-4xl'>Vous pouvez vous connecter à votre compte</p>
                </div>
            </div>
            {/* form de connexion */}
            <div className='flex-1 px-9 py-14 bg-white'>
                <form className='flex flex-col gap-y-4'>
                    <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Nom*' />
                    <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type="email" placeholder='Email*' />
                    <div className='flex gap-x-2'>
                        <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Se connecter</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
