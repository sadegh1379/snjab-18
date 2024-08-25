import styled from "styled-components";

interface ModuleCardContainerProps {
  $lineColor: string;
  $status: string;
}

export const ModuleCardContainer = styled.div<ModuleCardContainerProps>`
  width: 300px;
  border-radius: 15px;
  padding: 23px;
  background-color: ${(props) =>
    props.$status === "active" ? "unset" : props.theme.colors.background.gray};
  /* background-color: ${(props) => props.theme.colors.background.primary}; */
  box-shadow: ${({ theme }) => theme.colors.shadow.sm};
  position: relative;
  transition: all 0.1s linear;

  &:hover {
    scale: ${(props) => (props.$status === "inactive" ? 1 : 1.07)};
  }

  .active_module_badge {
    @keyframes animate {
      0% {
        box-shadow:
          0 0 0 0 ${({ theme }) => theme.colors.background.successLight},
          0 0 0 0 ${({ theme }) => theme.colors.background.successLight};
      }
      50% {
        box-shadow:
          0 0 0 0 rgba(255, 4, 0, 0),
          0 0 0 10px rgba(255, 4, 0, 0);
      }
      100% {
        box-shadow:
          0 0 0 0 ${({ theme }) => theme.colors.background.successLight},
          0 0 0 2px rgba(255, 4, 0, 0);
      }
    }
    &.inactive {
      position: absolute;
      bottom: -15px;
      left: 20px;
      background-color: ${(props) =>
        props.theme.colors.background.successLight};
      cursor: pointer;
      border-radius: 8px;
      padding: 12px 8px 8px 15px;
      font-size: 14px;
      color: #fff;
      animation: animate 1.5s infinite linear;
    }
  }
  .introduction_module_badge {
    @keyframes animate-1 {
      0% {
        box-shadow:
          0 0 0 0 ${({ theme }) => theme.colors.background.warningDark},
          0 0 0 0 ${({ theme }) => theme.colors.background.warningDark};
      }
      50% {
        box-shadow:
          0 0 0 0 rgba(255, 4, 0, 0),
          0 0 0 10px rgba(255, 4, 0, 0);
      }
      100% {
        box-shadow:
          0 0 0 0 ${({ theme }) => theme.colors.background.warningDark},
          0 0 0 2px rgba(255, 4, 0, 0);
      }
    }
    &.inactive {
      position: absolute;
      bottom: -15px;
      left: 140px;
      background-color: ${(props) => props.theme.colors.background.warningDark};
      cursor: pointer;
      border-radius: 8px;
      padding: 12px 8px 8px 15px;
      font-size: 14px;
      color: #fff;
      animation: animate-1 1.5s infinite linear;
    }
  }

  .card_image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
    border: 1px solid ${(props) => props.$lineColor};
  }

  .title {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text.primary};
  }

  .line {
    margin: 20px 0;
    width: 50px;
    height: 3px;
    background-color: ${(props) => props.$lineColor};
  }

  .sub_modules {
    width: 100%;
    min-height: 120px;
    border-radius: 8px;
    padding: 15px 10px 10px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .sub_module_parent {
      filter: ${(props) =>
        props.$status === "inactive" ? "grayscale(1)" : "grayscale(0)"};
      cursor: ${(props) =>
        props.$status === "inactive" ? "unset" : "pointer"};
      .sub_module {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid ${(props) => props.$lineColor};
        display: flex;
        justify-content: center;
        transition: all 0.1s linear;
        align-items: center;

        &:hover {
          scale: ${(props) => (props.$status === "inactive" ? 1 : 1.1)};
        }
      }

      .sub_title {
        text-align: center;
        font-size: 11px;
        margin-top: 8px;
        max-width: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${(props) => props.theme.colors.text.secondary};
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: ${(props) =>
      props.$status === "inactive" ? "30px" : "unset"};
  }
`;
