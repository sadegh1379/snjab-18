import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .login_card {
    border: 1px solid ${(props) => props.theme.colors.border.primary};
    background-color: ${(props) =>
      props.theme.mode === "light" ? "#ffffff" : "#939393"};
    padding: 46px 34px 8px 34px;
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

    .button_group {
      margin: 24px 30px;
      .button_group_item {
        padding: 10px 25px;
        font-size: 13px;
        font-weight: 700;
        line-height: 19.5px;
        width: 158px;
      }

      @-moz-document url-prefix() {
        .button_group_item {
          font-weight: 500;
          padding: 10px 18px;
        }
      }
    }

    .username_input {
      margin-top: 20px;
      text-align: right;
      font-family: "iran-sans";
    }

    .footer_title {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      margin-top: 30px;

      .sign_up {
        color: ${({ theme }) => theme.colors.text.infoLight};
      }
    }
    .version {
      font-size: 15px;
      font-weight: 700;
      line-height: 22.5px;
      margin-top: 50px;
    }
    .no_auth_service_btn {
      border: none;
    }
    .captcha_container {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 10px;

      .captcha_input {
        flex: 1;

        input {
          width: 100%;
        }
      }
      .image_container {
        display: flex;
        align-items: center;
        gap: 5px;

        .refresh_icon {
          cursor: pointer;
          user-select: none;
          color: ${({ theme }) => theme.colors.background.infoLight};
        }

        .captcha_image {
          width: 100px;
          height: 50px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .login_card {
      width: 100%;

      .login_title {
        font-size: 16px;
        line-height: 18.5px;
      }

      .footer_title {
        font-size: 14px;
        line-height: 18px;
      }
      .button_group {
        margin: 10px;
        .button_group_item {
          font-size: 10px;
          font-weight: 700;
          line-height: 19.5px;
          width: 100px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .login_card {
      .no_auth_service_btn {
        display: none;
      }
    }
  }
`;
