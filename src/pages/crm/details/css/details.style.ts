import styled from "styled-components";

export const DetailsContainer = styled.div`
  .report_form {
    margin-top: 70px;
    padding: 60px 40px;
  }

  .status_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .submit_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 50px 0;

    .button {
      width: 468px;
    }
  }

  .status_container {
    .status_card {
      margin-top: 46px;
      padding: 32px 20px;

      .title_container {
        font-size: 14px;
        line-height: 20.71px;
      }
    }
    .status_box {
      background-color: ${({ theme }) => theme.colors.background.primary};
      padding: 10px;
      border: 1px solid ${({ theme }) => theme.colors.border.primary};
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .right_container {
        display: flex;
        align-items: center;
        gap: 5px;

        .title {
          border-right: 1px solid ${({ theme }) => theme.colors.border.primary};
          padding-right: 13px;
          margin-right: 3px;
          font-size: 16px;
          color: ${({ theme }) => theme.colors.text.primary};
          line-height: 19.5px;
        }
        .text {
          color: ${({ theme }) => theme.colors.text.primary};
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
        }

        .right_icon {
          width: 24px;
          height: 24px;
        }
      }
      .logo_status,
      .circle {
        width: 35px;
        height: 35px;
      }
      .circle {
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.border.primary};
      }
    }
  }

  @media (max-width: 992px) {
    .status_container {
      .status_box {
        .right_container {
          .text {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .status_container {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
  @media (max-width: 425px) {
    .status_container {
      .status_card {
        .title_container {
          font-size: 12px;
        }
      }
      .status_box {
        .right_container {
          .title {
            font-size: 14px;
            line-height: 16.5px;
          }
        }
        .logo_status,
        .circle {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;
