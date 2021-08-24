import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  background-color: #232027;
  padding: 90px 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1400px) {
    padding: 90px 50px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60vw;

    @media screen and (max-width: 1600px) {
      width: 70vw;
    }
    @media screen and (max-width: 1400px) {
      width: 80vw;
    }
    @media screen and (max-width: 1200px) {
      width: 90vw;
    }

    @media screen and (max-width: 949px) {
      flex-direction: column;
    }
    @media screen and (max-width: 820px) {
      width: 40vw;
    }

    .left {
      color: #fff;
      font-size: 40px;
      @media screen and (max-width: 949px) {
        margin-bottom: 50px;
      }
    }

    .footer-right {
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: center;
      }
      &-links {
        margin-right: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        @media screen and (max-width: 1100px) {
          margin-right: 40px;
        }
        @media screen and (max-width: 820px) {
          align-items: center;
          margin-right: 0;
          margin-bottom: 40px;
        }
        p {
          color: #fff;
          margin-bottom: 10px;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          @media screen and (max-width: 820px) {
            align-items: center;
          }

          a {
            cursor: pointer;
          }
        }
      }
      .icons {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        div:not(:last-child) {
          margin-right: 15px;
        }
        .icon {
          font-size: 30px;
          color: #fff;
        }
      }
    }
  }
`;
