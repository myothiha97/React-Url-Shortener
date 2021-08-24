import React, { useState, useEffect } from "react";
import { UrlShortenFormStyles } from "./shorten-form.styles";
import ButtonCyan from "../button-cyan/button-cyan.component";
import axios from "axios";

const UrlShortenForm = () => {
  const [results, setResults] = useState([]);
  const [link, setLink] = useState("");
  // const [isFetching, setIsfetching] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "content-type": "application/json",
      Authorization: "Bearer 786a82495e2e0e7b7810e4544f4ad5594c627365",
    };
    const data = {
      long_url: link,
      domain: "bit.ly",
    };
    const payload = JSON.stringify(data);
    axios
      .post("https://api-ssl.bitly.com/v4/shorten", payload, { headers })
      .then((res) => {
        setResults([...results, { data: res.data, isCopied: false }]);
      })
      .catch((e) => console.log(e.message));
  };

  const renderResult = (results) => {
    if (results.length > 0) {
      return results.map((result) => (
        <div className="result">
          <div className="result-content">
            <div className="left-content">
              <p className="left-content">{result.data.long_url}</p>
            </div>
            <div className="line"></div>
            <div className="right-content">
              <p>{result.data.link}</p>
              <div onClick={() => handleCopyClipBoard(result)}>
                <ButtonCyan>{result.isCopied ? "copied" : "copy"}</ButtonCyan>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return null;
    }
  };

  const handleCopyClipBoard = async (res) => {
    await navigator.clipboard.writeText(res.data.link);
    const newResults = results.map((result) => {
      if (result.data.link === res.data.link) {
        result.isCopied = true;
        return result;
      } else {
        return result;
      }
    });
    setResults([...newResults]);
  };
  return (
    <UrlShortenFormStyles>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="shorten a link here"
            onChange={(event) => setLink(event.target.value)}
            value={link}
          />
          <div className="submit-btn">
            <ButtonCyan>Shorten It!</ButtonCyan>
          </div>
        </form>
        {renderResult(results)}
      </div>
    </UrlShortenFormStyles>
  );
};

export default UrlShortenForm;
