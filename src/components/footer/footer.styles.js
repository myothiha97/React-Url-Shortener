import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  background-color: #232027;
  padding: 90px 150px;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;

    .left {
      color: #fff;
      font-size: 35px;
    }

    .footer-right {
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &-links {
        margin-right: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        p {
          color: #fff;
          margin-bottom: 10px;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

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
