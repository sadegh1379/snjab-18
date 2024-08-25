import styled from "styled-components";

export const FinalFeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;

  .subject {
    font-size: 12px;
    font-weight: 700;
    line-height: 25.8px;
    text-align: center;
  }

  .select_referral {
    width: 60%;
    margin: 11px auto 0 auto;
  }

  .submit_button_container {
    text-align: center;

    .submit {
      width: 200px;
      margin-top: 20px;
    }
  }
`;
