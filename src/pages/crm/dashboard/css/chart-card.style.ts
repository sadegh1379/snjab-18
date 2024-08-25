import styled from "styled-components";

export const ChartLayoutContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.primary};
  border: 1px solid ${(props) => props.theme.colors.background.gray};
  padding: 20px;
  box-shadow: ${(props) => props.theme.colors.shadow.sm};
  border-radius: 8px;
  .chart_card_top_section {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .chart_card_title {
      font-size: 20px;
      font-weight: bold;
    }
    .chart_card_left_option {
      padding: 0;
    }
  }

  @media (max-width: 1000px) {
    padding: 10px;
    .chart_card_top_section {
      .chart_card_title {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 425px) {
    .chart_card_top_section {
      flex-direction: column;
      .chart_card_title {
        font-size: 14px;
        padding-top: 20px;
        padding-bottom: 10px;
      }
    }
  }
`;
