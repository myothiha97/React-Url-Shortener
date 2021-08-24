import styled from "styled-components";

export const NavbarStyle = styled.div`
  padding: 25px 200px;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 950px) {
    padding: 25px 100px;
  }

  .navbar-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .appear-contents {
      width: 80vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .nav-left {
        width: 25vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .heading {
          h2 {
            font-size: 35px;
            font-weight: 700;
            color: #000;
          }
        }
        &-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media screen and (max-width: 950px) {
            display: none;
          }

          .link:not(:last-child) {
            margin-right: 20px;
          }
        }
        @media screen and (max-width: 1400px) {
          width: 450px;
        }
      }

      .nav-right {
        width: 220px;
        @media screen and (max-width: 950px) {
          display: none;
        }
        &-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .menu {
        width: 40px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        @media screen and (max-width: 950px) {
          display: flex;
        }
        .menu-bar {
          background-color: #000;
          width: 40px;
          height: 3px;
          margin: 5px;
        }
      }
    }

    .hidden-menu-wrapper {
      display: none;
      margin-top: 50px;
      @media screen and (max-width: 950px) {
        display: ${(props) => (props.isOpen ? "block" : "none")};
      }
    }
  }
`;
