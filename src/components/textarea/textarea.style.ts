import styled from "styled-components";

export const TextareaContainer = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 8px;
    font-size: 14px;
    font-family: "yekan-bold";
  }

  .textarea {
    min-width: 60px;

    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 9px;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    font-size: 17px;
    padding: 5px 8px;

    &:disabled {
      background-color: ${({ theme }) => theme.colors.background.secondary};
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #828282;
    }
  }
  .required {
    color: red;
  }
`;
