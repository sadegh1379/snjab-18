import styled from "styled-components";

export const SelectWithLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 60px;

  .select {
    border-radius: 9px !important;
    width: 100%;
    min-width: 60px;
    text-align: right !important;

    .option_container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;

      .logo {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }

      .title {
        margin: 0;
      }
    }
  }

  .title {
    color: ${(props) => props.theme.colors.text.primary};
    margin-bottom: 10px;
    font-size: 12px;
  }

  .required {
    color: red;
  }
`;
