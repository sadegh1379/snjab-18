import styled from "styled-components";

export const ButtonContainer = styled.div`
  .required {
    color: red;
  }

  .title {
    color: ${(props) => props.theme.colors.text.primary};
    margin-bottom: 10px;
    font-family: "yekan-bold";
    font-size: 14px;
  }

  .btn_group_item {
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.background.primary};
    border-color: ${(props) => props.theme.colors.background.infoLight};
    padding-left: 3rem;
    padding-right: 3rem;

    &.active {
      color: #ffffff;
      background-color: ${(props) => props.theme.colors.background.infoLight};
    }

    &:first-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    &:last-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  @media (max-width: 768px) {
    .btn_group_item {
      padding-left: 2rem;
      padding-right: 2rem;
      font-size: 12px;
    }
  }
`;
