import styled from "styled-components";

export const UrlShortenFormStyles = styled.div`
  padding: 60px;
  background-image: url("/images/bg-shorten-desktop.svg");

  background-size: cover;
  background-position: center;
  background-color: #3a3053;
  border-radius: 10px;
  .form-wrapper {
    width: 60vw;

    form {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 80%;
        padding: 15px;
        border-radius: 10px;
        margin-right: 50px;
      }
    }
  }
`;
