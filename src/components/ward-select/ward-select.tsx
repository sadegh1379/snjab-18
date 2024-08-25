import {
  GETHospitalWardList,
  GETHospitalWardListWithOrganization,
} from "api/hospital";
import { SelectInput } from "components/select/select";
import { ISelectProps } from "components/select/types";
import { useEffect, useMemo, useState, type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWardList } from "state-manager/reducer/hospital";
import { RootState } from "state-manager/store";

interface IWardSelectProps
  extends Omit<ISelectProps, "options" | "isLoading" | "value" | "onChange"> {
  wardId: string | null | undefined;
  onChange: (id: string | null) => void;
  organizationId?: string;
}

export const WardSelect: FC<IWardSelectProps> = ({ ...props }) => {
  const { onChange, wardId, organizationId } = props;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { wardList } = useSelector((state: RootState) => state.hospital);

  useEffect(() => {
    setIsLoading(true);
    if (organizationId) {
      GETHospitalWardListWithOrganization(organizationId).then((res) => {
        dispatch(changeWardList(res));
        setIsLoading(false);
      });
    } else {
      GETHospitalWardList().then((res) => {
        dispatch(changeWardList(res));
        setIsLoading(false);
      });
    }
  }, []);

  const wardOptions: IGSelectOption[] = useMemo(() => {
    return wardList.map((ward) => ({
      label: ward.name,
      value: `${ward.id}`,
    }));
  }, [wardList]);

  const wardValue = () => {
    const option = wardOptions.find((option) => option.value === wardId);
    if (option) {
      return {
        label: option.label,
        value: option.value,
      };
    } else {
      return null;
    }
  };

  const onChangeWard = (ward: IGSelectOption) => {
    onChange(ward?.value || null);
  };

  return (
    <SelectInput
      {...props}
      isLoading={isLoading}
      options={wardOptions}
      value={wardValue()}
      onChange={onChangeWard}
    />
  );
};
