import styled from "styled-components";

export const HiddenMenuStyle = styled.div`
  width: 60vw;
  padding: 18px 15px;
  background-color: #3a3053;
  border-radius: 10px;
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .hidden-menu-link {
      cursor: pointer;
      margin-bottom: 20px;
      a {
        color: #fff;
        font-size: 18px;
      }
    }
    .dash-line {
      background-color: #fff;
      cursor: none;
      width: 50vw;
      height: 1px;
      border-bottom: 1px solid #fff;
    }
  }
`;
