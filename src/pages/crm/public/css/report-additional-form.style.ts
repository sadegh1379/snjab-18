import styled from "styled-components";

export const ReportAdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .form_group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 1200px) {
    .form_group {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: 2fr;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    .form_group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;
