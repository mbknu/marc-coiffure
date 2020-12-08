import React, { useState } from "react";

import styles from "./pricesByGender.module.css";

const PricesByGender = ({ women, men }) => {
  const [menHairCut, setMenHairCut] = useState(false);
  const [womenHairCut, setWomenHairCut] = useState(false);

  const showWomenPrices = women[0].map((cut) => {
    return (
      <p className={styles.text_information}>
        {cut.text} <p className={styles.price_information}>{cut.price} € </p>
      </p>
    );
  });
  const showWomenForfeit = women[1].map((cut) => {
    return (
      <p className={styles.text_information}>
        {cut.forfait_text}{" "}
        <p className={styles.price_information}>{cut.price} € </p>
      </p>
    );
  });
  const showWomenForfeitUnder20 = women[2].map((cut) => {
    return (
      <p className={styles.text_information}>
        {cut.forfait_under20years_text}{" "}
        <p className={styles.price_information}>{cut.price} € </p>
      </p>
    );
  });

  const showMenPrices = men[0].map((cut) => {
    return (
      <p className={styles.text_information}>
        {cut.text} <p className={styles.price_information}>{cut.price} € </p>
      </p>
    );
  });
  const showMenForfeit = men[1].map((cut) => {
    return (
      <p className={styles.text_information}>
        {cut.forfait_text}{" "}
        <p className={styles.price_information}>{cut.price} € </p>
      </p>
    );
  });
  const showMenForfeitUnder20 = men[2].map((cut) => {
    return (
      <p className={styles.text_information}>
        {cut.forfait_under20years_text}{" "}
        <p className={styles.price_information}>{cut.price} € </p>
      </p>
    );
  });

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <a
          className={styles.gender}
          onClick={() => {
            setMenHairCut(true);
            setWomenHairCut(false);
          }}
        >
          Hommes
        </a>
        <a
          className={styles.gender}
          onClick={() => {
            setMenHairCut(false);
            setWomenHairCut(true);
          }}
        >
          Femmes
        </a>
      </div>

      <div>
        {womenHairCut && (
          <div className={styles.wrapper}>
            <div className={styles.container}>{showWomenPrices}</div>
            <div className={styles.container}>FORFAIT : {showWomenForfeit}</div>
            <div className={styles.container}>
              - 20 ans : {showWomenForfeitUnder20}
            </div>
          </div>
        )}
      </div>
      <div className={styles.wrapper}>
        {menHairCut && (
          <div className={styles.wrapper}>
            <div className={styles.container}>{showMenPrices}</div>
            <div className={styles.container}>FORFAIT : {showMenForfeit}</div>
            <div className={styles.container}>
              - 20 ans : {showMenForfeitUnder20}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricesByGender;
