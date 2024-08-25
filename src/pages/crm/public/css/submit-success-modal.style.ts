import styled from "styled-components";

export const SubmitSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 18px;
  text-align: center;
  .subject {
    font-size: 20px;
    margin-top: 22px;
  }
  .icon_success {
    color: ${(props) => props.theme.colors.background.successLight};
  }
  .tracking_code {
    color: ${(props) => props.theme.colors.background.successDark};
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
    font-family: "iran-sans";
  }
  .text {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  .close_button {
    margin-top: 15px;
    width: 132px;
  }

  @media (max-width: 425px) {
    gap: 8px;

    .icon_success {
      width: 60px;
    }
    .subject,
    .tracking_code {
      font-size: 14px;
    }
    .text {
      font-size: 12px;
    }
  }
`;
