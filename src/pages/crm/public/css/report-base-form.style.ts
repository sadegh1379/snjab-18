import styled from "styled-components";

export const ReportBaseFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  .btn-group {
    width: 100%;
    height: 56.5px;
  }

  @media (max-width: 1200px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 2fr;
    gap: 10px;
  }

  @media (max-width: 768px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr;

    .btn-group {
      height: 46.5px;
    }
  }
`;
