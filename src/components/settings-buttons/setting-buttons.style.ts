import styled from "styled-components";

export const ServiceModalContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
  .title {
    font-size: 14px;
    font-weight: 500;
    line-height: 23.1px;
    max-width: 80%;
    margin: 12px auto;
  }

  .select_hospital {
    width: 40%;
    margin: 15px auto 22px auto;
  }

  .service_list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px;

    .service_card {
      width: 113px;
      height: 110px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 7px;
      border: 1px solid ${({ theme }) => theme.colors.border.primary};
      border-radius: 10px;
      cursor: pointer;
      .image {
        width: 50px;
        height: 50px;
      }

      .text {
        font-size: 12px;
        font-weight: 500;
        line-height: 19.8px;
      }
    }
  }

  @media (max-width: 390px) {
    .select_hospital {
      width: 80%;
    }
  }
`;

export const SettingButtonsContainer = styled.div`
  .floating_button_container {
    position: fixed;
    z-index: 999;

    &.bottom-left {
      bottom: 10px;
      left: 10px;
    }
    &.bottom-right {
      bottom: 10px;
      right: 10px;
    }

    .floating_button {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.background.infoLight};
      color: white;
      font-size: 24px;
      border: none;
      cursor: pointer;
      transition: transform 0.3s;
      box-shadow: 0px 0px 8px 0px
        ${(props) => props.theme.colors.background.primaryReverse};
      -webkit-box-shadow: 0px 0px 8px 0px
        ${(props) => props.theme.colors.background.primaryReverse};
      -moz-box-shadow: 0px 0px 8px 0px
        ${(props) => props.theme.colors.background.primaryReverse};

      &.show {
        background-color: ${(props) =>
          props.theme.colors.background.errorLight};
      }
    }

    .button_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 80px;
      right: 0;
      animation: fadeOut 0.3s forwards;

      &.show {
        animation: fadeIn 0.3s forwards;
      }

      .list_button,
      a {
        margin: 5px 0;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.background.infoLight};
        box-shadow: 0px 0px 8px 0px
          ${(props) => props.theme.colors.background.primaryReverse};
        -webkit-box-shadow: 0px 0px 8px 0px
          ${(props) => props.theme.colors.background.primaryReverse};
        -moz-box-shadow: 0px 0px 8px 0px
          ${(props) => props.theme.colors.background.primaryReverse};
        color: #ffffff;
        border: none;
        cursor: pointer;
      }
    }
  }

  .floating_button_overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(10px);
    visibility: hidden;
    opacity: 0;
    transition:
      all 0.3s,
      opacity 0.3s ease-in-out;
    z-index: 998;

    &.show {
      visibility: visible;
      opacity: 1;
    }

    &.hide {
      visibility: hidden;
      opacity: 0;
    }
  }

  @media (min-width: 768px) {
    .floating_button_container {
      &.bottom-left {
        bottom: 20px;
        left: 20px;
      }
      &.bottom-right {
        bottom: 20px;
        right: 20px;
      }

      .floating_button {
        width: 60px;
        height: 60px;
      }

      .button_list {
        bottom: 80px;

        .list_button {
          width: 60px;
          height: 60px;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }
`;
