import styled from "styled-components";

export const SmsCodeInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  direction: ltr;

  .sms_input {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 24px;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: 9px;
    border: 1px solid ${({ theme }) => theme.colors.border.primary};
    font-size: 17px;
    padding: 10px 10px;
    font-family: iran-sans;

    &:focus {
      outline: none;
    }

    &.error {
      animation: shake-x 0.3s;
      border: 1px solid ${({ theme }) => theme.colors.background.errorDark};
    }
  }
`;
