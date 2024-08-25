import styled from "styled-components";

export const ReportContainer = styled.div`
  .report_select {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .form_group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 20px 0;
  }
  .select_input {
    margin-bottom: 10px;
  }

  @media (max-width: 992px) {
    .form_group {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .report_select {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 992px) {
    .report_select {
      display: flex;
      gap: 0;
    }
  }

  @media (max-width: 425px) {
    .form_group {
      grid-template-columns: 1fr;
    }
  }
`;
