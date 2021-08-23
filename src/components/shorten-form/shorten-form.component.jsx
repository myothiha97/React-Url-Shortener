import React from "react";
import { UrlShortenFormStyles } from "./shorten-form.styles";
import ButtonCyan from "../button-cyan/button-cyan.component";

const UrlShortenForm = () => {
  return (
    <UrlShortenFormStyles>
      <div className="form-wrapper">
        <form action="">
          <input type="text" placeholder="shorten a link here" />
          <ButtonCyan>Shorten It!</ButtonCyan>
        </form>
      </div>
    </UrlShortenFormStyles>
  );
};

export default UrlShortenForm;
