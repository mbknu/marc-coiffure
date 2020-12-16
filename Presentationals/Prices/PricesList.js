import React from "react";

import manhaircut from "../../constants/manhaircut";
import womenhaircut from "../../constants/womenhaircut";
import PricesByGender from "./PricesByGender";

import styles from "./pricesList.module.css";

const Prices = () => {
  return (
    <div>
      <div>
        <PricesByGender men={manhaircut} women={womenhaircut} />
      </div>
      <p className={styles.covid}>
        NFO COVID 19 : En raison des contraintes liées à la limitation de la
        propagation de l'épidémie Les prestations de barbe sont suspendues pour
        une durée indéterminée
      </p>
    </div>
  );
};

export default Prices;
