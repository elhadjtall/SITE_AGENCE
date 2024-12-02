import React from "react";
import ImmeubleForm from "../components/ImmeubleForm";

const AddImmeuble = () => {
  const handleAdd = (immeuble) => {
    console.log("Ajouté :", immeuble);
    // Vous pouvez appeler l'API d'ajout ici
  };

  return (
    <div>
      <h1>Ajouter un Immeuble</h1>
      <ImmeubleForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddImmeuble;
