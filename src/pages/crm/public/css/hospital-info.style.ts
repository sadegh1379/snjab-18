import styled from "styled-components";

export const HospitalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .logo {
    width: 150px;
    height: 150px;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 24.5px;
  }

  .btn_group_item {
    height: 45px;
    &:first-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:last-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }

  @media (min-width: 768px) {
    .title {
      font-size: 23px;
      line-height: 34.5px;
    }
  }
  @media (max-width: 768px) {
    .btn_group_item {
      height: 35px;
    }
  }
`;
