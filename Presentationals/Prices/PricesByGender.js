import React, { useState } from "react";

const PricesByGender = ({ women, men }) => {
  const [menHairCut, setMenHairCut] = useState(false);
  const [womenHairCut, setWomenHairCut] = useState(false);

  console.log({ women, men });

  const showWomenPrices = women[0].map((cut) => {
    return (
      <>
        <p>{cut.text}</p>
        <p>{cut.price} €</p>
      </>
    );
  });
  const showWomenForfeit = women[1].map((cut) => {
    return (
      <>
        <p>{cut.forfait_text}</p>
        <p>{cut.price} €</p>
      </>
    );
  });
  const showWomenForfeitUnder20 = women[2].map((cut) => {
    return (
      <>
        <p>{cut.forfait_under20years_text}</p>
        <p>{cut.price} €</p>
      </>
    );
  });

  const showMenPrices = men[0].map((cut) => {
    return (
      <>
        <p>{cut.text}</p>
        <p>{cut.price} €</p>
      </>
    );
  });
  const showMenForfeit = men[1].map((cut) => {
    return (
      <>
        <p>{cut.forfait_text}</p>
        <p>{cut.price} €</p>
      </>
    );
  });
  const showMenForfeitUnder20 = men[2].map((cut) => {
    return (
      <>
        <p>{cut.forfait_under20years_text}</p>
        <p>{cut.price} €</p>
      </>
    );
  });

  return (
    <div>
      <button
        onClick={() => {
          setMenHairCut(true);
          setWomenHairCut(false);
        }}
      >
        Hommes
      </button>
      <button
        onClick={() => {
          setMenHairCut(false);
          setWomenHairCut(true);
        }}
      >
        Femmes
      </button>
      <div>
        {womenHairCut && (
          <>
            <div>{showWomenPrices}</div>
            <div>FORFAIT : {showWomenForfeit}</div>
            <div>- 20 ans : {showWomenForfeitUnder20}</div>
          </>
        )}
      </div>
      <div>
        {menHairCut && (
          <>
            <div>{showMenPrices}</div>
            <div>FORFAIT : {showMenForfeit}</div>
            <div>- 20 ans : {showMenForfeitUnder20}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PricesByGender;
