import styled from "styled-components";

export const ApplicationsContainer = styled.div`
  .overlay {
    .purple {
      background-image: linear-gradient(
        to bottom,
        #a437f8,
        #9656f4,
        #9264f9,
        #8b6df5
      );
    }

    .red {
      background-image: linear-gradient(to bottom, #f83d5f, #fc754f, #fe8c4a);
    }

    .green {
      background-image: linear-gradient(to bottom, #3ef2c0, #3defa6, #61db94);
    }

    .circle {
      border-radius: 50%;
      position: absolute;
      z-index: -1;
    }

    .big_red {
      width: 220px;
      height: 220px;
      top: 120px;
      right: -80px;
      filter: blur(20px);
      animation: pulse 10s infinite ease;
    }

    .small_green {
      width: 30px;
      height: 30px;
      top: 70px;
      left: 250px;
      top: 100px;
      box-shadow: 0 0 30px rgba(61, 239, 166, 0.3);
    }

    .small_purple {
      width: 25px;
      height: 25px;
      bottom: 50px;
      right: 400px;
      box-shadow: 0 0 30px rgba(164, 55, 248, 0.5);
    }

    .small_red {
      width: 45px;
      height: 45px;
      bottom: 340px;
      left: 220px;
      box-shadow: 0 0 30px #f83d5f;
    }

    .large_green {
      width: 200px;
      height: 200px;
      filter: blur(20px);
      bottom: 100px;
      left: 50px;
      animation: pulse 10s infinite ease;
    }
  }

  .hospital_applications {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 50px;
    margin-top: 30px;

    .title_container {
      margin-bottom: 16px;
      font-size: 24px;
      font-family: "yekan-bold";
      text-align: center;
    }

    .applications {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;

      .loader {
        width: 300px;
        height: 380px;
        border-radius: 15px;
      }
    }
  }

  .hospital_info {
    margin-top: 30px;
  }

  .hospital_logo,
  .hospital_name {
    display: flex;
  }

  .hospital_logo {
    margin: 20px auto 0 auto;
    width: 130px;
    height: 130px;
  }

  .hospital_name {
    margin: 0 auto;
    width: 150px;
    height: 20px;
  }

  @media (max-width: 1300px) {
    .hospital_applications {
      .applications {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: 768px) {
    .overlay {
      .green {
        display: none;
      }

      .small_green {
        display: none;
      }

      .small_purple {
        display: none;
      }

      .small_red {
        display: none;
      }

      .large_green {
        display: none;
      }
    }
    .hospital_applications {
      .applications {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
