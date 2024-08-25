import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: ${(props) => props.theme.sizes.border.r_8};
  background-color: ${(props) => props.theme.colors.background.secondary};
  border: 1px solid ${(props) => props.theme.colors.background.infoLight};
  padding: 73px 103px;
  position: relative;
  font-family: "yekan-bold";
  .info_title {
    position: absolute;
    top: -25px;
    right: 30px;
    background-color: ${(props) => props.theme.colors.background.infoLight};
    border-radius: ${(props) => props.theme.sizes.border.r_8};
    color: #ffffff;
    padding: 9px 20px;
    font-family: "yekan-bold";
    line-height: 30px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 30px;
    .info_title {
      font-size: 14px;
      line-height: 30px;
    }
  }
`;
