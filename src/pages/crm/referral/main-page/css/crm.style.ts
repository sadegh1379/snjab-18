import styled from "styled-components";

export const CrmContainer = styled.div`
  .reports {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 13px;
    margin-top: 10px;

    .reports_status {
      width: auto;
      padding: 10.5px 24px;
      font-size: 13px;
      font-weight: 700;
      line-height: 19.5px;
    }

    .reports_excel {
      width: auto;
    }
  }

  .list {
    margin: 12px auto;
    color: ${(props) => props.theme.colors.text.errorLight};
    .status_button {
      color: white;
      padding: 7px 0;
      border-radius: 5px;
    }

    .pending {
      background-color: ${(props) => props.theme.colors.text.warningLight};
    }
    .done {
      background-color: ${(props) => props.theme.colors.text.successLight};
    }
    .submitted {
      background-color: ${(props) => props.theme.colors.text.errorLight};
    }
  }

  .text_success {
    color: ${(props) => props.theme.colors.text.successLight};
  }

  .text_warning {
    color: ${(props) => props.theme.colors.text.warningLight};
  }

  .text_failure {
    color: ${(props) => props.theme.colors.text.errorLight};
  }

  .icons_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
  }

  .pagination_container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 16px auto 16px auto;
  }

  @media (max-width: 768px) {
    .pagination_container {
      justify-content: center;
    }
  }
`;
