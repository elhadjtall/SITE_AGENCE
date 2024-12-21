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
    console.log(houses);

    // si loading est vrai alors on affiche un spinner
    if (loading) {
        return (
            <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]'/>
        );
    }

    if (houses.length < 1) {
        return (
            <div className='text-center text-3xl text-gray-400 mt-48 font-medium'>
                No properties found
            </div> 
        );
    }
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
