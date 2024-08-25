import styled from "styled-components";

export const LoginContainer = styled.div`
  overflow-x: hidden;
  .login_container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 3fr;
  }

  @media (max-width: 1300px) {
    .login_container {
      grid-template-columns: 1fr;
      padding: 10px;
    }
  }
`;
