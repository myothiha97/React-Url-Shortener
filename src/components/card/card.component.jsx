import React from "react";
import { CardStyled } from "./card.styles";

const Card = ({ children }) => {
  return (
    <CardStyled>
      <div className="texts">
        <h1>{children}</h1>
        <p>
          Boost your brand recognition with each click. Generic links don't mean
          a thing.Branded links help instill confiedence in your content.
        </p>
      </div>
      <div className="round-icon"></div>
    </CardStyled>
  );
};

export default Card;
