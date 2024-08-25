import styled from "styled-components";

export const HospitalLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .login_card {
    border: 1px solid ${(props) => props.theme.colors.border.primary};
    background-color: ${(props) =>
      props.theme.mode === "light" ? "#ffffff" : "#939393"};
    padding: 40px 34px 8px 34px;
    border-radius: 20px;
    text-align: center;
    z-index: 1;
    width: 454px;

    .login_title {
      font-size: 22px;
      font-weight: 700;
      line-height: 25.5px;
      color: ${(props) => props.theme.colors.text.primary};
      text-align: center;
    }

    .login_sub {
      font-size: 18px;
      font-weight: 700;
      line-height: 31.5px;
      margin-top: 40px;
    }
    .username_input {
      margin-top: 20px;
      text-align: right;
      font-family: "iran-sans";
    }

    .footer_title {
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      margin-top: 30px;

      .separator {
        color: ${({ theme }) => theme.colors.text.primary};
      }
      .sign_up {
        color: ${({ theme }) => theme.colors.text.infoLight};
      }
    }

    .version {
      font-size: 15px;
      font-weight: 700;
      line-height: 22.5px;
      margin-top: 80px;
    }
  }

  @media (max-width: 485px) {
    .login_card {
      width: 100%;

      .login_title {
        font-size: 18px;
        line-height: 18.5px;
      }

      .login_sub {
        font-size: 14px;
        margin-top: 30px;
      }

      .footer_title {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;
