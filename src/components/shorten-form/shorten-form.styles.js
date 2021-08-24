import styled from "styled-components";

export const UrlShortenFormStyles = styled.div`
  .form-wrapper {
    width: 75vw;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 402px) {
      width: 90vw;
    }

    .result {
      width: 100%;
      margin-top: 15px;
      padding: 15px;
      background-color: #fff;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      @media screen and (max-width: 920px) {
        padding: 0;
      }
      &-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;

        @media screen and (max-width: 920px) {
          flex-direction: column;
        }

        .left-content {
          padding: 10px;
          p {
            width: 55%;

            @media screen and (max-width: 920px) {
              width: 100%;
              text-align: center;
            }

            @media screen and (max-width: 500px) {
              text-align: left;
            }
          }
        }
        .line {
          display: none;
          @media screen and (max-width: 920px) {
            display: block;
            width: 100%;
            height: 1px;
            background-color: #c4c4c4;
          }
        }
        .right-content {
          display: flex;
          align-items: center;
          justify-content: center;

          @media screen and (max-width: 920px) {
            justify-content: space-evenly;
            padding: 20px;
            width: 100%;
          }

          @media screen and (max-width: 500px) {
            flex-direction: column;
            align-items: flex-start;
          }
          p {
            margin-right: 15px;
            @media screen and (max-width: 920px) {
              margin-right: 0;
              margin-bottom: 5px;
            }
          }
        }
      }
    }

    form {
      width: inherit;
      padding: 60px;
      background-image: url("/images/bg-shorten-desktop.svg");
      background-size: cover;
      background-position: center;
      background-color: #3a3053;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 950px) {
        display: block;
      }

      @media screen and (max-width: 561px) {
        padding: 30px;
      }
      input {
        width: 80%;
        padding: 15px;
        border-radius: 10px;
        margin-right: 50px;
        @media screen and (max-width: 950px) {
          width: 100%;
          margin-bottom: 20px;
        }
      }

      .submit-btn {
        @media screen and (max-width: 950px) {
          width: 100%;
        }
      }
    }
  }
`;
