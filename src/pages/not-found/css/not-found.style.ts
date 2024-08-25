import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 36px);
  text-align: center;

  .notfound_message {
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 22px;
  }
  .notfound_img {
    max-width: 600px;
    height: auto;
  }
  @media (max-width: 768px) {
    .notfound_img {
      max-width: 400px;
    }
  }
  @media (max-width: 425px) {
    .notfound_message {
      font-size: 14px;
    }
    .notfound_img {
      max-width: 250px;
    }
  }
`;
