import React, { useEffect, useState } from "react";
import ImmeubleList from "../components/ImmeubleList";
import { getAllImmeubles } from "../services/api";

const ViewImmeubles = () => {
  const [immeubles, setImmeubles] = useState([]);

  useEffect(() => {
    getAllImmeubles()
      .then(setImmeubles)
      .catch(console.error);
  }, []);

  const handleDelete = (id) => {
    console.log("Supprimé :", id);
    // Vous pouvez appeler l'API de suppression ici
  };

  return (
    <div>
      <h1>Liste des Immeubles</h1>
      <ImmeubleList immeubles={immeubles} onDelete={handleDelete} />
    </div>
  );
};

export default ViewImmeubles;
