import styled from "styled-components";

export const CrmContainer = styled.div`
  .submit_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 70px;

    .button {
      width: 271px;
    }
  }

  @media (max-width: 360px) {
    .submit_container {
      gap: 10px;
      margin-bottom: 30px;
      flex-direction: column;

      .button {
        width: 231px;
      }
    }
  }
`;
