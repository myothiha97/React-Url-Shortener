import styled from "styled-components";

export const HomePageStyle = styled.div`
  .get-started {
    padding: 100px 0 235px 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-weight: 700;
        font-size: 80px;
        color: #000;
        &:first-child {
          margin-bottom: -15px;
        }
      }
      p {
        font-size: 25px;
        width: 500px;
        font-weight: 500;
        margin-bottom: 40px;
      }
    }

    .right {
      width: 50%;
      transform: translateX(200px) translateY(50px);
    }
    .shorten-form {
      position: absolute;
      top: 90%;
      right: 17%;
    }
  }

  .statistic {
    width: 100%;
    padding: 300px 150px 200px 200px;
    background-color: #f0f1f6;
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
      }
    }

    .cards-container {
      width: 100%;
      margin-top: 100px;
      position: relative;
      z-index: 1;

      .line {
        width: 100%;
        height: 8px;
        background-color: #2fd2d1;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }
      .cards {
        position: relative;
        z-index: 3;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

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
      }
    }
  }
`;
