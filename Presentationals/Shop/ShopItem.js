import React, { useState } from "react";

import Image from "next/image";

import styles from "./shopItem.module.css";

const ShopItem = ({ cdmProduct, joicoProduct }) => {
  const [cdm, setCdm] = useState(true);
  const [joico, setJoico] = useState(false);

  const cdmList = cdmProduct.map((element) => {
    return (
      <div className={styles.item}>
        <p>{element.title}</p>
        {/* <p>{element.text}</p> */}
        <Image
          src={`/${element.image}`}
          alt="image-product"
          width={110}
          height={148}
          loading="lazy"
        ></Image>

        <p>{element.price} €</p>
      </div>
    );
  });
  console.log("joico", joicoProduct);

  const joicoList = joicoProduct[0].map((element) => {
    return (
      <div className={styles.item}>
        <p>{element.title}</p>
        {/* <p>{element.text}</p> */}
        <Image
          src={`/${element.image}`}
          alt="image-product"
          width={110}
          height={148}
          loading="lazy"
        ></Image>
      </div>
    );
  });
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.brand}
        onClick={() => {
          setCdm(true);
          setJoico(false);
        }}
      >
        CDM
      </a>
      <a
        className={styles.brand}
        onClick={() => {
          setCdm(false);
          setJoico(true);
        }}
      >
        JOICO
      </a>
      <div className={styles.container}>{cdm && cdmList}</div>
      <div className={styles.container}>{joico && joicoList}</div>
    </div>
  );
};
export default ShopItem;
