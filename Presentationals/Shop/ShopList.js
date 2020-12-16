import React from "react";
import CDM from "../../constants/cdm";
import JOICO from "../../constants/joico";
import ShopItem from "./ShopItem";

const ShopList = () => {
  return (
    <div>
      <ShopItem cdmProduct={CDM} joicoProduct={JOICO} />
    </div>
  );
};

export default ShopList;
