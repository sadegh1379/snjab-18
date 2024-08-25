import styled from "styled-components";

export const LoginInfoContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;

  .footer {
    color: #ffffff;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    position: relative;
    right: -45px;
    margin-top: 35px;
  }

  .swiper_container {
    width: 800px;
    position: relative;
    right: -35px;
    text-align: center;

    .app_logo {
      width: 180px;
    }

    .title {
      font-size: 28px;
      font-weight: 700;
      line-height: 31.5px;
      margin-top: 10px;
      color: #ffffff;
    }

    .swiper_component {
      padding-bottom: 40px;

      .swiper-pagination {
        display: flex;
        justify-content: center;
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          border-radius: 6px;
          background: #ffffff;
          display: block;
          cursor: pointer;
        }
        &.swiper-pagination-bullet-active {
          width: "12px";
          color: "#ffffff";
        }
      }

      .swiper_slide {
        width: 100px;
        text-align: center;

        .description {
          max-width: 700px;
          text-align: center;
          margin: 0 auto;
          font-size: 16px;
          font-weight: 500;
          line-height: 33.12px;
          margin-top: 15px;
          color: #ffffff;
        }

        .caption {
          font-size: 18px;
          font-weight: 700;
          line-height: 31.05px;
          margin-top: 20px;
          color: #ffffff;
        }

        .get_button {
          margin-top: 30px;
          min-width: max-content;
          width: 200px;
        }
      }
      .slide_1 {
      }
    }
  }

  .single_organization_services_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
    padding-left: 60px;

    .service {
      width: 113px;
      height: 110px;
      display: flex;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: 1px solid ${({ theme }) => theme.colors.border.primary};
      border-radius: 10px;
      cursor: pointer;
      .service_image {
        width: 60px;
        height: 60px;
      }

      .service_text {
        font-size: 14px;
        font-weight: 700;
        line-height: 19.8px;
        color: black;
      }
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;
