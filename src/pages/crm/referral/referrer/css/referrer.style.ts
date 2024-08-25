import styled from "styled-components";

export const ReferrerContainer = styled.div`
  .referrer_action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 13px;
    margin-top: 34px;

    .action {
      width: auto;
      padding: 10.5px 24px;
      font-size: 13px;
      font-weight: 700;
      line-height: 19.5px;
    }

    .code {
      width: auto;
    }
  }

  .referrer_list {
    margin-top: 7px;
  }

  .wrapper {
    display: inline-block;
    position: relative;

    .notification {
      width: 14px;
      height: 14px;
      background-color: ${(props) => props.theme.colors.background.errorLight};
      border-radius: 50%;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      color: #fff;

      position: absolute;
      top: -5px;
      left: -5px;
    }
  }

  .pagination_container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 16px 0;
  }

  @media (max-width: 768px) {
    .pagination_container {
      justify-content: center;
    }
  }
`;
