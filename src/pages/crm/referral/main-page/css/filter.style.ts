import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.primary};
  margin: 12px auto 0 auto;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.border.primary};

  .header {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    background-color: ${(props) => props.theme.colors.background.infoLight};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .title {
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      color: #fff;
      text-align: center;
    }
  }

  .search {
    padding: 0 39px;
    margin: 18px auto 0 auto;
  }

  .select_container {
    padding: 0 39px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin: 16px auto 24px auto;
  }

  @media (max-width: 768px) {
    .search {
      padding: 0 12px;
    }

    .select_container {
      padding: 0 12px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 390px) {
    .search {
      padding: 0 8px;
    }

    .select_container {
      padding: 0 8px;
      grid-template-columns: 1fr;
    }
  }
`;
