import React from "react";
import { CoinContainer } from "../AppStyle";

const Coin = ({ name, image, price, priceChange }) => {
  return (
    <CoinContainer className={priceChange < 0 ? "red" : "green"}>
      <div className="coin-direction">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
          <p className="coin-price">Cena: {price} PLN</p>
          <p className="coin-price">Zmiana: {priceChange.toFixed(2)}%</p>
        </div>
      </div>
    </CoinContainer>
  );
};

export default Coin;
