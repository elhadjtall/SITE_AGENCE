import React, { useEffect, useState } from 'react';
import { getAllImmeubles, addImmeuble, deleteImmeuble } from '../services/api';
import ImmeubleList from '../components/ImmeubleList';
import ImmeubleForm from '../components/ImmeubleForm';

const Home = () => {
  const [immeubles, setImmeubles] = useState([]);

  useEffect(() => {
    getAllImmeubles()
      .then(setImmeubles)
      .catch(console.error);
  }, []);

  const handleAdd = (newImmeuble) => {
    addImmeuble(newImmeuble)
      .then(() => setImmeubles((prev) => [...prev, newImmeuble]))
      .catch(console.error);
  };

  const handleDelete = (id) => {
    deleteImmeuble(id)
      .then(() => setImmeubles((prev) => prev.filter((immeuble) => immeuble.id !== id)))
      .catch(console.error);
  };

  return (
    <div>
      <h1>Gestion des Immeubles</h1>
      <ImmeubleForm onSubmit={handleAdd} />
      <ImmeubleList immeubles={immeubles} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
