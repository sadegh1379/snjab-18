import styled from "styled-components";

export const OverlayBannerContainer = styled.div`
  position: absolute;
  left: 0;
  width: 80vw;
  z-index: 0;
  border-radius: 0 ${({ theme }) => theme.sizes.border.r_8}
    ${({ theme }) => theme.sizes.border.r_8} 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.infoLight};

  @media (max-width: 1300px) {
    width: 100%;
    border-radius: 0;
  }
`;
