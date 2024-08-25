import styled from "styled-components";

export const DotLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8.5px 0;
  width: 100%;

  .dot {
    animation: dot-keyframes 1.5s infinite ease-in-out;
    background-color: ${(props) => props.theme.colors.text.primary};
    border-radius: 10px;
    display: inline-block;
    height: 7px;
    width: 7px;
    margin: 0 2px;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      animation-delay: 1s;
    }
  }

  @keyframes dot-keyframes {
    0% {
      opacity: 0.4;
      transform: scale(1, 1);
    }

    50% {
      opacity: 1;
      transform: scale(1.2, 1.2);
    }

    100% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
  }
`;
