import styled from "styled-components";

export const TimeContainer = styled.div`
  width: 100%;
  min-width: 60px;

  .title {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 14px;
    font-family: "yekan-bold";
    margin-bottom: 10px;
  }

  .input_container {
    position: relative;
    .date_picker {
      width: 100%;
      min-width: 60px;
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
      border: none;
      font-size: 17px;
      border-radius: 9px;
      border: 1px solid ${({ theme }) => theme.colors.border.primary};
      padding: 15px 16px 14px 16px;
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.background.secondary};
      }
    }

    .left_icon {
      position: absolute;
      border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
      color: ${({ theme }) => theme.colors.border.primary};
      bottom: 16px;
      left: 15px;
      padding-right: 8px;
    }

    .time_picker_container {
      display: block !important;
    }

    .rmdp-time-picker div input {
      color: ${({ theme }) => theme.colors.text.primary};
      background-color: ${({ theme }) => theme.colors.background.primary};
    }

    .rmdp-ep-arrow:after {
      background-color: ${({ theme }) => theme.colors.background.primary};
    }

    .rmdp-ep-arrow[direction="bottom"] {
      border-top: 1px solid ${({ theme }) => theme.colors.background.primary};
    }

    .rmdp-ep-arrow[direction="top"] {
      border-bottom: 1px solid ${({ theme }) => theme.colors.background.primary};
    }

    @media (max-width: 768px) {
      .date_picker {
        padding: 10px 11px 9px 11px;
      }

      .left_icon {
        bottom: 11px;
        left: 13px;
      }
    }
  }
  .required {
    color: red;
  }
`;
