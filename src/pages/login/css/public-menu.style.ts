import styled from "styled-components";

export const PublicMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 34px 45px;
  z-index: 2;

  .floating_button_container {
    position: fixed;
    z-index: 999;
    bottom: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .title {
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
    }

    .floating_button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.background.primary};
      color: ${(props) => props.theme.colors.text.infoLight};
      font-size: 24px;
      border: none;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .button_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 100px;
      right: 25px;

      animation: fadeOut 0.3s forwards;

      &.show {
        animation: fadeIn 0.3s forwards;
      }

      .list_button,
      a {
        margin: 5px 0;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.background.infoLight};
        box-shadow: 0px 0px 8px 0px #ffffff;
        -webkit-box-shadow: 0px 0px 8px 0px #ffffff;
        -moz-box-shadow: 0px 0px 8px 0px #ffffff;
        color: #ffffff;
        border: none;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .floating_button_container {
      display: none;
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
