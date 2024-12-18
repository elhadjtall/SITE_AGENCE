import React, { useContext } from 'react';

// import context
import { HouseContext } from '../components/HouseContext';


// impot components
import House from '../components/House';

// import links de navigation de react router
import { Link } from 'react-router-dom';

// import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext)
    console.log(houses)
  return (
    <section className='mb-20'>
      <div className="container mx-auto">
        {/* Dans ce div on fait la mise en forme de nos images et les infos en 3 formes */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-14'>
            {houses.map((house, index) => {
                return <Link to={`/proerty/${house.id}`}
                key={index}>
                    <House house={house} />
                
                </Link>;
            })}
        </div>
      </div>
    </section>
  )
}

export default HouseList
