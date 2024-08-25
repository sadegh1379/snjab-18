import styled from "styled-components";

export const DashboardContainer = styled.div`
  .container {
    margin-top: 50px;
    margin-bottom: 50px;
    .dashboard_title_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .dashboard_title {
        font-size: 24px;
        font-weight: bold;
        margin-left: 30px;
        white-space: nowrap;
        margin-bottom: -50px;
      }
      .input_dashboard {
        width: 250px;
      }
    }
    .single_chart {
      .container_filter {
        display: flex;
        gap: 15px;
      }
      .end_filter {
        width: 200px;
      }
    }
    .selected_ward {
      width: 200px;
    }
  }

  .container_charts,
  .container_charts_revers,
  .container_pie_chart {
    display: grid;
    gap: 15px;
    margin-bottom: 15px;
  }
  .container_charts {
    grid-template-columns: 1fr 2fr;
  }

  .container_charts_revers {
    grid-template-columns: 2fr 1fr;
  }
  .container_pie_chart {
    grid-template-columns: repeat(2, 1fr);
  }

  .filter_select > div > div {
    padding: 3px 7px 3px 3px;
  }

  @media (max-width: 1000px) {
    .container_charts,
    .container_charts_revers,
    .container_pie_chart {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 425px) {
    .container {
      .dashboard_title_container {
        .dashboard_title {
          font-size: 16px;
        }
        .input_dashboard {
          width: 150px;
        }
      }
      .single_chart {
        .end_filter {
          width: 150px;
        }
      }
      .selected_ward {
        width: 150px;
      }
    }
  }
`;
