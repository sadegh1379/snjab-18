import styled from "styled-components";

export const TrackingCodeContainer = styled.div`
  .tracking_form_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    margin-top: 40px;

    .code {
      margin-bottom: 30px;
    }

    .input_container {
      width: 600px;
      height: 55px;
      position: relative;

      .track_input {
        padding-left: 150px;
        padding: 20px;
        font-size: 18px;
      }
      .get_track_button {
        position: absolute;
        top: 7px;
        left: 7px;
        font-size: 13px;
        border-radius: 12px;
        padding: 14px 40px;
        font-size: 16px;
        width: 130px;
      }
    }
  }
  .track_result_hr {
    position: relative;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.border.primary};
    margin-top: 82px;
    .track_result_hr_text {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px 50px;
      border-radius: 5px;
      background-color: #d9d9d9;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #5e5e5e;
    }
  }

  .feedback_container {
    margin-top: 40px;
  }

  .notfound {
    text-align: center;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    .tracking_form_container {
      .input_container {
        width: 100%;
        .track_input {
          padding-left: 140px;
        }
        .get_track_button {
          width: 100px;
          top: 7px;
          left: 7px;

          font-size: 13px;
          padding: 14px 30px;
          font-size: 16px;
          width: 120px;
        }
      }
    }

    .track_result_hr {
      margin-top: 60px;
      .track_result_hr_text {
        padding: 5px 10px;
        font-size: 12px;
      }
    }
  }
`;
