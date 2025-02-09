import React from 'react';


import elon from '../assets/img/elon.jpg';

const About = () => {
  return (
    <section>
        <div className='container mx-auto py-16 min-h-screen'>
        <div className='text-center'>
            <h1 className='text-3xl font-semibold'>Qui somme nous ?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, mollitia fuga, quidem obcaecati possimus exercitationem sequi sint, alias quos aperiam omnis accusamus repudiandae quas! Quaerat quas quisquam eum eveniet officiis.</p>
        </div>
        <div className='flex gap-x-8 py-12 '>
            <div className='flex flex-col items-center'>
              <div className=''>
                <img className=' object-cover border border-gray-200' src={elon} alt="" />
              </div>
              <div className='text-center flex gap-x-2'>
                <h1 className='text-2xl font-semibold'>Elhadj TALL</h1>
                <p className='text-2xl font-semibold'> - CEO</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <img src={elon} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
            </div>
        </div>
        </div>
        {/* Description */}
        <div>
          <div>
            <div className='container mx-auto py-16 text-center'>
              <h1 className='text-4xl font-semibold text-[#1e1e1e]'>Qui somme nous ?</h1>
              <p>Nous somme une agence immobilière qui vous aide à trouver le bien immobilier de vos rêves, notre mission est de vous aider à trouver le bien immobilier de vos rêves. Nous utilisons des technologies modernes pour vous aider à trouver le bien immobilier de vos rêves.</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About
