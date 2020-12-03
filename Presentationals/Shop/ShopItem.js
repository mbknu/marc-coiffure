import React from "react";

import Image from "next/image";

const ShopItem = ({ products }) => {
  console.log("products", products);
  const productList = products.map((element) => {
    return (
      <div>
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
  return <div>{productList}</div>;
};
export default ShopItem;
