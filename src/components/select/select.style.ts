import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 60px;

  .select {
    border-radius: 9px !important;
    width: 100%;
    min-width: 60px;
  }

  .title {
    color: ${(props) => props.theme.colors.text.primary};
    margin-bottom: 10px;
    font-family: "yekan-bold";
    font-size: 14px;
  }

  .required {
    color: red;
  }
`;
