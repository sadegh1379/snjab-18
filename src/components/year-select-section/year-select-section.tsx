import { Container } from "components/container/container";
import { SelectInput } from "components/select/select";
import moment from "moment-jalaali";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedYear } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import { YearSelectSectionProps } from "./types";
import { YearSelectSectionContainer } from "./year-select-section.style";

export const YearSelectSection: FC<YearSelectSectionProps> = () => {
  const { selectedYear } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const currentYear = moment().jYear();
  const startYear = 1394;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  ).map((year) => ({
    label: year.toString(),
    value: year.toString(),
  }));

  const changeYearHandler = (option: IGSelectOption) => {
    dispatch(changeSelectedYear(`${option.value}`));
  };

  return (
    <YearSelectSectionContainer>
      <Container>
        <SelectInput
          onChange={changeYearHandler}
          value={{
            label: selectedYear,
            value: selectedYear,
          }}
          containerClassName="year_select"
          className="year_select_input"
          isSearchable={false}
          options={years}
        />
      </Container>
    </YearSelectSectionContainer>
  );
};
