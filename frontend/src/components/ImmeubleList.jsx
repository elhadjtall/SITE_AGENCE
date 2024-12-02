import React from "react";
import "./ImmeubleList.css";

const ImmeubleList = ({ immeubles }) => {
  return (
    <div style={styles.container}>
      {immeubles.map((immeuble) => (
        <div key={immeuble.id} style={styles.card}>
          <img src={immeuble.image} alt={immeuble.nom} style={styles.image} />
          <div style={styles.details}>
            <h3 style={styles.title}>{immeuble.nom}</h3>
            <p style={styles.description}>{immeuble.description}</p>
            <p style={styles.info}>
              <strong>Adresse:</strong> {immeuble.adresse}
            </p>
            <p style={styles.info}>
              <strong>Nombre d'appartements:</strong> {immeuble.nbr_appartements}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  details: {
    padding: "15px",
  },
  title: {
    fontSize: "18px",
    margin: "0 0 10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 10px 0",
  },
  info: {
    fontSize: "14px",
    margin: "5px 0",
  },
};

export default ImmeubleList;
