import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  .button {
    width: 270px;
    padding: 10px;

    @media (max-width: 768px) {
      width: 140px;
    }
  }
`;
