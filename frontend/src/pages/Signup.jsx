import React from 'react'

// importation des liens
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section>
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen gap-4 bg-violet-700 px-4'>
            <div className='flex-1'>
                <div className='text-white px-12 py-10 text-center '>
                    <h1 className='text-6xl font-semibold mb-3'>Creez compte</h1>
                    <p className='mb-6 text-4xl font-semibold'>Vous pouvez créer votre compte</p>
                </div>
            </div>
            {/* form de connexion */}
            <div className='flex-1 px-10 py-14 bg-white rounded w-full'>
                <h1 className='text-3xl font-semibold mb-4 text-center py-4'>Creat a account</h1>
                <form className='flex flex-col gap-y-4'>
                    <div className='flex gap-x-2'>
                    <input className='border border-violet-700  outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Name*' />
                    <input  className='border border-violet-700  outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Lastname*' />
                    </div>
                    <div className='flex gap-x-2'>
                    <input className='border border-violet-700  outline-none rounded w-full px-4 h-14 text-sm' type="email" placeholder='Email*' />
                    <input className='border border-violet-700  outline-none rounded w-full px-4 h-14 text-sm' type="number" placeholder='Phone*'/>
                    </div>
                    <input className='border border-violet-700  outline-none rounded w-full px-4 h-14 text-sm' type="password" placeholder='Password*' />
                    <div className='flex justify-between text-1xl'>
                        <div>
                            <Link className='text-violet-700 font-semibold' to=''>Mot de passe oublie ?</Link>
                        </div>
                        <div className='flex gap-x-2'>
                            <p>Vous avez deja un compte ?</p>
                            <Link className='text-violet-700 font-semibold' to='/login'>Se connecter</Link>
                        </div>
                    </div>
                    <div className='flex gap-x-2'>
                        <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Creer</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Signup
