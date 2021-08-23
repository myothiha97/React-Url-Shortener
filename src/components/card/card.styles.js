import styled from "styled-components";

export const CardStyled = styled.div`
  padding: 80px 30px 40px 30px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .texts {
    width: 350px;
    text-align: left;
    font-weight: 500;
    font-size: 18px;

    h1 {
      color: black;
      font-size: 25px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 30px;
    }
  }

  .round-icon {
    background-color: #3a3053;
    background-image: url("/images/icon-brand-recognition.svg");
    background-size: cover;
    background-position: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    left: 25px;
  }
`;
