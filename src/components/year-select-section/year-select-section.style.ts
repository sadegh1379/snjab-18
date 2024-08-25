import styled from "styled-components";

export const YearSelectSectionContainer = styled.div`
  width: 100%;
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.colors.border.primary};
  background-color: ${(props) => props.theme.colors.background.secondary};
  border-left-width: 0;
  border-right-width: 0;
  padding-top: 10px;
  /* padding-bottom: px; */
  .year_select {
    width: 160px;
    display: inline-block;
    margin-bottom: 10px;
    align-self: left;

    .year_select_input {
      font-family: iran-sans;
    }
  }

  @media (max-width: 768px) {
    .year_select {
      width: 130px;
    }
  }
`;
