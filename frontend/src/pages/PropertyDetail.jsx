import React from 'react';


// importation des datas
import { housesData } from '../data';


// import use params
import { useParams } from 'react-router-dom';

// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

// import links de navigation de react router
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
    // recupere l'id de l'url
    const { id } = useParams();
    console.log(id);
  return (
    <div>
      PropertyDetails
    </div>
  )
}

export default PropertyDetail;
