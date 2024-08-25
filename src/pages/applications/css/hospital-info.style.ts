import styled from "styled-components";

export const HospitalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 120px;
  }

  .title {
    font-size: 18px;
  }

  @media (max-width: 665px) {
    .title {
      font-size: 12px;
    }
  }
`;
