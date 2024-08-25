import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 60px;
  width: 100%;
  background-color: #104c82;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #104c82;
  transition: all 0.2s linear;

  .dot {
    background-color: ${(props) =>
      props.theme.mode === "light"
        ? props.theme.colors.text.primaryReverse
        : props.theme.colors.text.primary} !important;
  }

  &.small {
    padding: 5px 8px;
    padding-top: 7px;
  }

  &.medium {
    padding: 7px 10px;
    padding-top: 9px;
  }

  &.large {
    padding: 10px 13px;
    padding-top: 12px;
  }

  &.error {
    background-color: ${(props) => props.theme.colors.background.errorLight};
    border-color: ${(props) => props.theme.colors.background.errorLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.background.errorDark};
      border-color: ${(props) => props.theme.colors.background.errorDark};
    }

    &.outlined {
      background-color: ${(props) => props.theme.colors.background.primary};
      color: ${(props) => props.theme.colors.text.errorLight};
    }
  }

  &.info {
    background-color: ${(props) => props.theme.colors.background.infoLight};
    border-color: ${(props) => props.theme.colors.background.infoLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.background.infoDark};
      border-color: ${(props) => props.theme.colors.background.infoDark};
    }
    &.outlined {
      background-color: ${(props) => props.theme.colors.background.primary};
      color: ${(props) => props.theme.colors.text.primary};
    }
  }

  &.success {
    background-color: ${(props) => props.theme.colors.background.successLight};
    border-color: ${(props) => props.theme.colors.background.successLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.background.successDark};
      border-color: ${(props) => props.theme.colors.background.successDark};
    }

    &.outlined {
      background-color: ${(props) => props.theme.colors.background.primary};
      color: ${(props) => props.theme.colors.text.successLight};
    }
  }

  &.warning {
    background-color: ${(props) => props.theme.colors.background.warningLight};
    border-color: ${(props) => props.theme.colors.background.warningLight};

    &:hover {
      background-color: ${(props) => props.theme.colors.background.warningDark};
      border-color: ${(props) => props.theme.colors.background.warningDark};
    }

    &.outlined {
      background-color: ${(props) => props.theme.colors.background.primary};
      color: ${(props) => props.theme.colors.text.warningLight};
    }
  }

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    &.small {
      padding: 3px 6px;
      padding-top: 5px;
    }

    &.medium {
      padding: 5px 8px;
      padding-top: 7px;
    }

    &.large {
      padding: 8px 11px;
      padding-top: 10px;
    }
  }
`;
