import React from "react";

import manhaircut from "../../constants/manhaircut";
import womenhaircut from "../../constants/womenhaircut";
import PricesByGender from "./PricesByGender";

const Prices = () => {
  return (
    <div>
      <div>
        <PricesByGender men={manhaircut} women={womenhaircut} />
      </div>
      NFO COVID 19 : En raison des contraintes liées à la limitation de la
      propagation de l'épidémie Les prestations de barbe sont suspendues pour
      une durée indéterminée
    </div>
  );
};

export default Prices;
