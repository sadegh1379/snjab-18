import { Input, SelectInput, WardSelect } from "components";
import { type FC } from "react";
import { GoSearch } from "react-icons/go";
import { FilterContainer } from "../css/filter.style";
import { IFilterValues } from "../types";

interface IFilterProps {
  onChangeFilter: (
    name: keyof IFilterValues,
    value: string | IGSelectOption | null
  ) => void;
  filterValues: IFilterValues;
}

const FilterBox: FC<IFilterProps> = ({ filterValues, onChangeFilter }) => {
  return (
    <FilterContainer>
      <div className="header">
        <p className="title">
          کاربر گرامی شما می توانید با استفاده از این بخش داده مورد نظر خود را
          فیلتر کنید
        </p>
      </div>
      <Input
        value={filterValues.query}
        onChange={(v) => onChangeFilter("query", v)}
        icon={<GoSearch className="date_icon" size={20} />}
        containerClassName="search"
        placeholder="جستجــو کلید واژه"
      />
      <div className="select_container">
        <SelectInput
          value={filterValues.status}
          onChange={(ob) => onChangeFilter("status", ob)}
          title="وضعیت"
          placeholder="همـــه"
          options={[
            {
              label: "خاتمه یافته",
              value: "done",
            },

            {
              label: " در حال بررسی",
              value: "pending",
            },
            {
              label: "مشاهده نشده",
              value: "submitted",
            },
          ]}
          containerClassName="select_item"
          isClearable
        />
        <SelectInput
          value={filterValues.is_criticism}
          onChange={(ob) => onChangeFilter("is_criticism", ob)}
          title="نوع گزارش"
          placeholder="همـــه"
          options={[
            {
              label: "شکایت",
              value: "is_criticism",
            },
            {
              label: "تقدیر",
              value: "no_criticism",
            },
          ]}
          containerClassName="select_item"
          isClearable
        />
        <WardSelect
          title="واحد مورد نظر"
          onChange={(id) => onChangeFilter("target_ward", id)}
          wardId={filterValues.target_ward}
          placeholder="همـــه"
          containerClassName="select_item"
          isClearable
        />
        <SelectInput
          value={filterValues.target_group}
          onChange={(ob) => onChangeFilter("target_group", ob)}
          title="گروه مورد نظر"
          placeholder="همـــه"
          options={[
            {
              label: "گروه پزشکان",
              value: "گروه پزشکان",
            },
            {
              label: "گروه پرستاران",
              value: "گروه پرستاران",
            },
            {
              label: "گروه بهیاران",
              value: "گروه بهیاران",
            },
            {
              label: "گروه خدمات",
              value: "گروه خدمات",
            },
            {
              label: "گروه پاراکلینیکی",
              value: "گروه پاراکلینیکی",
            },
            {
              label: "گروه اداری و پشتیبانی",
              value: "گروه اداری و پشتیبانی",
            },
            {
              label: "سایرموارد",
              value: "سایرموارد",
            },
          ]}
          containerClassName="select_item"
          isClearable
        />
      </div>
    </FilterContainer>
  );
};

export default FilterBox;
