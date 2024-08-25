import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;

  .table {
    width: 100%;
    border-collapse: collapse;

    .thead_th {
      padding: 13px 24px 12px 24px;
      background-color: ${(props) => props.theme.colors.background.infoLight};
      color: #ffffff;
      white-space: nowrap;
      text-align: left;
      font-size: 14px;
      font-family: "yekan-bold";
      line-height: 17px;
      text-align: center;
    }

    .thead_th:last-child {
      border-radius: ${(props) => props.theme.sizes.border.r_8} 0 0 0;
    }
    .thead_th:first-child {
      border-radius: 0 ${(props) => props.theme.sizes.border.r_8} 0 0;
    }
    .tbody_td {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      padding: 8px 0;
      white-space: nowrap;
      border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
      background-color: ${(props) => props.theme.colors.background.primary};
      color: ${(props) => props.theme.colors.text.primary};
      text-align: center;
      display: table-cell;
      vertical-align: middle;
    }
    .tbody_tr:nth-child(even) {
      td {
        background-color: ${(props) => props.theme.colors.background.secondary};
        color: ${(props) => props.theme.colors.text.primary};
      }
    }
    .tbody_tr.row_highlight td {
      background-color: rgba(255, 0, 0, 0.1);
    }
  }

  .sortContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  .sort_icon {
    margin-top: 5px;
  }

  .empty_container {
    text-align: center;
    padding: 50px 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background.primary};
    color: ${(props) => props.theme.colors.text.primary};
  }

  .loading_container {
    text-align: center;
    padding: 10px 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background.primary};
    color: ${(props) => props.theme.colors.text.primary};
  }

  .not_found_text {
    margin-top: 10px;
    color: ${(props) => props.theme.colors.text.secondary};
    font-size: 12px;
    font-weight: 500;

    > p {
      margin-top: 10px;
      font-size: 14px;
    }
  }

  .empty_light_icon,
  .empty_dark_icon {
    color: red;
    margin: 20px auto;
  }

  .empty_light_icon {
    display: green;
  }

  .empty_dark_icon {
    display: red;
  }

  .pointer {
    cursor: pointer;
  }
`;
