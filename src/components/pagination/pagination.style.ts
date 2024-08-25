import styled from "styled-components";

export const PaginationContainer = styled.div`
  gap: 5px;
  font-family: iran-sans;
  input {
    width: 25px;
    font-size: 16px;
    border-radius: 2px;
    margin-bottom: -3px;
    padding-top: 4px;
    background-color: #e1e3e5;
    color: ${(props) => props.theme.colors.text.primary};
    background-color: ${(props) => props.theme.colors.background.gray};
    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      -moz-appearance: textfield;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
  .arrow {
    font-size: 24px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.background.primary};
  }
  .text {
    font-size: 18px;
    margin-bottom: -3px;
    color: ${(props) => props.theme.colors.text.primary};
  }
  @media (max-width: 768px) {
    .text {
      font-size: 14px;
    }
    .arrow {
      font-size: 20px;
    }
    input {
      font-size: 14px;
    }
  }
`;
