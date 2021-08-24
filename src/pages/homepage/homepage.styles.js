import styled from "styled-components";

export const HomePageStyle = styled.div`
  .get-started {
    padding: 100px 0 235px 200px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1400px) {
      padding-left: 50px;
      padding-top: 50px;
      transform: scale(0.85);
    }

    @media screen and (max-width: 900px) {
      transform: scale(1);
      padding-top: 20px;
    }

    .section-middle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
      }
    }

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: center;

      @media screen and (max-width: 900px) {
        width: 100%;
        align-items: center;
      }

      &-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 900px) {
          align-items: center;
        }
        h1 {
          font-weight: 700;
          font-size: 80px;
          color: #000;

          @media screen and (max-width: 1400px) {
            font-size: 50px;
          }

          @media screen and (max-width: 445px) {
            font-size: 35px;
          }
          &:first-child {
            margin-bottom: -15px;
          }
        }
        p {
          font-size: 25px;
          width: 25vw;
          font-weight: 500;
          margin-bottom: 40px;
          text-align: left;

          @media (max-width: 900px) {
            width: 45vw;
            text-align: center;
          }

          @media (max-width: 600px) {
            width: 55vw;
          }

          @media screen and (max-width: 445px) {
            font-size: 20px;
            width: 100%;
          }
        }
      }
    }

    .right {
      width: 50%;
      transform: translateX(200px) translateY(50px);

      @media screen and (max-width: 1400px) {
        transform: translate(0);
      }

      @media screen and (max-width: 900px) {
        transform: scale(0.8);
        width: 100%;
      }
    }
  }

  .statistic {
    .shorten-form {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: -80px;
    }
    width: 100%;

    background-color: #f0f1f6;
    .content {
      padding: 100px 150px 200px 200px;
      @media screen and (max-width: 1400px) {
        padding-left: 50px;
        padding-right: 50px;
      }

      @media screen and (max-width: 600px) {
        padding-left: 20px;
        padding-right: 20px;
      }

      .text {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
          font-size: 50px;
          color: black;
        }

        p {
          width: 550px;
          font-size: 23px;
          font-weight: 500;

          @media screen and (max-width: 600px) {
            width: auto;
          }
        }
      }
      .cards-container {
        width: 100%;
        margin-top: 100px;
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .line {
          width: 100%;
          height: 8px;
          background-color: #2fd2d1;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;

          @media screen and (max-width: 1000px) {
            width: 8px;
            height: 100%;
          }
        }
        .cards {
          position: relative;
          z-index: 3;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media screen and (max-width: 1000px) {
            flex-direction: column;
          }

          .card-wrapper {
            &:nth-of-type(2) {
              transform: translateY(40px);
            }
            &:nth-of-type(3) {
              transform: translateY(80px);
            }
          }
        }
      }
    }
  }

  .boost {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3a3053;
    background-image: url("/images/bg-boost-desktop.svg");
    background-size: cover;

    .content {
      padding: 80px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 50px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 12px;

        @media screen and (max-width: 587px) {
          font-size: 30px;
        }
        @media screen and (max-width: 358px) {
          font-size: 20px;
        }
      }
    }
  }
`;
