import React from "react";
import Image from "next/image";

import styles from "./informations.module.css";

const Informations = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img_container}>
        <div className={styles.img_first_and_second}>
          <div className={styles.img_first}>
            <Image
              src="/assets/img/interieur-salon.jpg"
              alt="intérieur-salon"
              width={400}
              height={350}
            ></Image>
          </div>
          <div className={styles.img_second}>
            <Image
              src="/assets/img/vitrine-exterieur1.jpg"
              alt="intérieur-salon"
              width={400}
              height={350}
            ></Image>
          </div>
        </div>
        <div className={styles.img_last}>
          <Image
            src="/assets/img/vitrine-exterieur2.jpg"
            alt="intérieur-salon"
            width={400}
            height={350}
          ></Image>
        </div>
      </div>
      <div className={styles.text_container}>
        <div className={styles.text}>
          "Dans ce SALON votre MAITRE ARTISAN vous accueille sur rendez vous ,
          STYLISTE VISAGISTE à votre ECOUTE pour passer vos ENVIES au peigne
          fin, et prendre SOIN DE VOUS . Mettre de la COULEUR dans vos CHEVEUX
          et du SOLEIL dans votre coeur."
        </div>
      </div>
    </div>
  );
};
export default Informations;
