import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  .checkbox_input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    .form-check-input:checked {
      background-color: ${(props) => props.theme.colors.background.infoDark};
      border-color: ${(props) => props.theme.colors.background.infoDark};
    }

    input[type="checkbox"] {
      width: 25px;
      height: 25px;
      cursor: pointer;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }

    .form-check-label {
      font-size: 15px;
      font-family: "yekan-bold";
      line-height: 22.5px;
      margin-bottom: -10px;
      user-select: none;
    }
  }
`;
