import React from "react";
import styles from "./timetable.module.css";

const Timetable = () => {
  return (
    <div>
      <h1>
        Horaires d'ouverture de votre coiffeur Quartier Saint-Seurin / Mériadeck
      </h1>
      <div className={styles.open_hours}>
        <div>MARDI - 10h-19h</div>
        <div>MERCREDI - 10h-19h</div>
        <div>JEUDI - 10h-19h </div>
        <div>VENDREDI - 10h-19h</div>
        <div>SAMEDI - 10h-19h</div>
      </div>
    </div>
  );
};

export default Timetable;
