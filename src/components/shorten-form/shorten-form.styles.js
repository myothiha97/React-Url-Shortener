import styled from "styled-components";

export const UrlShortenFormStyles = styled.div`
  .form-wrapper {
    width: 75vw;

    display: flex;
    flex-direction: column;

    .result {
      width: 100%;
      margin-top: 15px;
      padding: 15px;
      background-color: #fff;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      &-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;

        .left-content {
          width: 55%;
        }

        .right-content {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            margin-right: 15px;
          }
        }
      }
    }

    form {
      padding: 60px;
      background-image: url("/images/bg-shorten-desktop.svg");
      background-size: cover;
      background-position: center;
      background-color: #3a3053;
      border-radius: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 75%;
        padding: 15px;
        border-radius: 10px;
        margin-right: 50px;
      }
    }
  }
`;
