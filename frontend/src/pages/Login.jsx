import React from 'react'

const Login = () => {
  return (
    <section className='container mx-auto min-h-[600px] mb-14'>
        <div className='text-center'>
            <h1 className='text-3xl font-semibold mb-4'>Vous avez besoin de vous connecter</h1>
        </div>
        <form className='flex flex-col gap-4 items-center'>
            <label className='text-lg font-semibold' htmlFor="email">Email</label>
            <input className='border border-gray-500 rounded-lg outline-none px-4 py-2' type="email" name="email" />
            <label className='text-lg font-semibold' htmlFor="password">Mot de passe</label>
            <input  className='border border-gray-500 rounded-lg outline-none px-4 py-2' type="password" name="password"  />
            <button className='bg-violet-700 hover:bg-violet-800 transition text-white py-3 rounded-lg' type="submit">Se connecter</button>
        </form>
    </section>
  )
}

export default Login
