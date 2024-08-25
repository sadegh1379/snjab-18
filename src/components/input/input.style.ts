import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  min-width: 60px;
  .title {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 10px;
    font-family: "yekan-bold";
    font-size: 14px;
  }
  .input_container {
    position: relative;

    .input {
      width: 100%;
      min-width: 60px;
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
      border-radius: 9px;
      border: 1px solid ${({ theme }) => theme.colors.border.primary};
      font-size: 17px;
      padding: 15px 16px 14px 16px;
      text-align: right;

      @media (max-width: 768px) {
        padding: 10px 11px 9px 11px;
      }

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
  }

  .required {
    color: red;
  }

  @media (max-width: 768px) {
    .input_container {
      input {
        padding: 10px 11px 9px 11px;
      }

      .left_icon {
        bottom: 11px;
        left: 13px;
      }
    }
  }
`;
