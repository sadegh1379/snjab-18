import styled from "styled-components";

export const HospitalPasswordRecoveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .recovery_password_card {
    border: 1px solid ${(props) => props.theme.colors.border.primary};
    background-color: ${(props) =>
      props.theme.mode === "light" ? "#ffffff" : "#939393"};
    padding: 40px 34px 8px 34px;
    border-radius: 20px;
    text-align: center;
    z-index: 1;
    width: 454px;

    .password_recovery_input {
      text-align: right;
      margin-top: 10px;
    }
    .recovery_title {
      font-size: 20px;
      font-weight: 700;
      line-height: 25.5px;
      color: ${(props) => props.theme.colors.text.primary};
      text-align: center;
    }

    .recovery_sub {
      font-size: 18px;
      font-weight: 700;
      line-height: 31.5px;
      margin-top: 20px;
    }

    .sms_input_container {
      margin-top: 30px;

      .loader {
        height: 50px;
        margin-top: 10px;

        .ring_loader {
          width: 40px;
          height: 40px;
        }
      }
    }
    .timer {
      font-size: 20px;
      font-weight: 700;
      line-height: 19.5px;
      margin-top: 20px;
      font-family: iran-sans;
    }

    .revalidate_time_container {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      margin-top: 10px;

      .revalidate_icon {
        cursor: pointer;
        &.not_active {
          cursor: not-allowed;
        }
      }
    }

    .version {
      font-size: 15px;
      font-weight: 700;
      line-height: 22.5px;
      margin-top: 50px;
    }
  }

  @media (max-width: 485px) {
    .recovery_password_card {
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
