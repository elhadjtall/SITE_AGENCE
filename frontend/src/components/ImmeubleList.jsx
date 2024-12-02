import React from 'react';

const ImmeubleList = ({ immeubles, onDelete }) => {
  return (
    <ul>
      {immeubles.map((immeuble) => (
        <li key={immeuble.id}>
          <b>{immeuble.nom}</b>: {immeuble.adresse} ({immeuble.nbr_appartements} appartements)
          <button onClick={() => onDelete(immeuble.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default ImmeubleList;
