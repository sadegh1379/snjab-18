import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.gray};
  text-align: center;
  padding: 9px 0;

  .title {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: 768px) {
    .title {
      font-size: 10px;
      line-height: 15px;
    }
  }
`;
