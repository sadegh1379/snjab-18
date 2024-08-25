import styled from "styled-components";

export const PublicHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 21px 27px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};

  .pointer {
    cursor: pointer;
  }
  .public_header_right_section {
    display: flex;
    gap: 20px;

    .public_header_title {
      line-height: 22.5px;
      font-size: 15px;
      font-family: "yekan-bold";
      margin-top: 3px;
    }
  }

  @media (max-width: 768px) {
    .public_header_right_section {
      .public_header_title {
        line-height: 20.5px;
        font-size: 12px;
      }
    }
  }
`;
