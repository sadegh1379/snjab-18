import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
    padding: 15px;
  a {
    color: ${(props) => props.theme.colors.text.primary};

    &:hover {
      color: ${(props) => props.theme.colors.text.infoLight};
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;
