import styled from "styled-components";

export const NavbarStyle = styled.div`
  padding: 25px 200px;
  font-size: 18px;
  font-weight: 500;

  .navbar-wrapper {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-left {
    width: 30vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1340px) {
      width: 450px;
    }

    h2 {
      color: #000;
    }
  }

  .nav-right {
    width: 13vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1340px) {
      width: 200px;
    }
  }
`;
