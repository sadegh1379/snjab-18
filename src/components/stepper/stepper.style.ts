import styled from "styled-components";

export const StepperContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .step_number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.background.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    z-index: 2;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }

  .step_name {
    font-size: 14px;
  }

  .active .step_number {
    background-color: ${({ theme }) => theme.colors.background.infoLight};
    color: #ffffff;
  }

  .complete .step_number {
    background-color: ${({ theme }) => theme.colors.background.successLight};
  }

  .progress_bar {
    position: absolute;
    top: 35%;
    left: 0;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.background.gray};
  }

  .progress {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.successLight};

    transition: 0.2s ease;
  }

  @media (max-width: 768px) {
    .step_number {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }

    .step_name {
      font-size: 12px;
    }

    .progress_bar {
      position: absolute;
      top: 30%;
      left: 0;
      height: 4px;
    }
  }
`;
