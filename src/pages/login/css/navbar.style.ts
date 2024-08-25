import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 34px 45px;
  z-index: 2;
  ul {
    z-index: 1;
    list-style: none;
    display: flex;
    gap: 30px;
    li {
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      line-height: 18px;
      cursor: pointer;
    }

    .mode {
      margin-top: -5px;
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;
