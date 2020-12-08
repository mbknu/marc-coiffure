import React, { useState } from "react";

import Image from "next/image";

import styles from "./shopItem.module.css";

const ShopItem = ({ products }) => {
  const [products0, setproducts0] = useState(true);
  const [products1, setproducts1] = useState(false);

  const productList = products[0].map((element) => {
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

  const productList1 = products[1].map((element) => {
    return (
      <div className={styles.item}>
        <p>{element.title}</p>
        <p>{element.text}</p>
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
  return (
    <>
      <div className={styles.container}>{products0 && productList}</div>
      <div className={styles.container}>
        {products1 && productList1}
        <button
          onClick={() => {
            setproducts0(false);
            setproducts1(true);
          }}
        >
          TEST
        </button>
      </div>
    </>
  );
};
export default ShopItem;
