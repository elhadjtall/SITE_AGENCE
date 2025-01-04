import React from 'react';


import elon from '../assets/img/elon.jpg';

const About = () => {
  return (
    <section>
        <div>
            <h1>Qui somme nous ?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, mollitia fuga, quidem obcaecati possimus exercitationem sequi sint, alias quos aperiam omnis accusamus repudiandae quas! Quaerat quas quisquam eum eveniet officiis.</p>
        </div>
        <div className='flex gap-x-8'>
            <div className='flex flex-col'>
              <div className=''>
                <img className='w-20 h-20 object-cover border border-gray-200 rounded-full' src={elon} alt="" />
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              </div>
            </div>
            <div>
                <div>
                    <img src={elon} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
