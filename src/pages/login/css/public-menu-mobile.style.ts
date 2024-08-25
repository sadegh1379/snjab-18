import styled from "styled-components";

export const ServiceModalMobileContainer = styled.div`
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
